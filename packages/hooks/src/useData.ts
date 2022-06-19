import { IndexedType, isPrimitive, set } from '@c3/utils';
import { cloneDeep } from 'lodash';
import { useMemo } from 'react';
import { useImmer } from 'use-immer';
// import { setAutoFreeze } from 'immer';
// setAutoFreeze(false);
const createPath = (prefix: string, cur: string) => {
  if (prefix === '') {
    return cur;
  }
  return `${prefix}.${cur}`;
};

export const useData = <T extends IndexedType<any>>(initialValue: T): T => {
  const [data, updateData] = useImmer(initialValue);
  // newData is configurable
  // TODO: make immer not freeze the data to reduce the performance problem
  const newData = useMemo(() => cloneDeep(data), [data]);
  const proxyData = useMemo(() => {
    const createProxy = (prefix: string, _data: T): T =>
      //@ts-ignore
      new Proxy(_data, {
        set: (target, p: string, value) => {
          updateData((draft: IndexedType) => {
            console.log('createPath(prefix, p)', createPath(prefix, p));
            set(draft, createPath(prefix, p), value);
          });
          return true;
        },
        get: (target: IndexedType, p: string) => {
          //{a:{b:{c:3}}}
          const v = target[p];
          if (!isPrimitive(v)) {
            //TODO: add cache
            return createProxy(createPath(prefix, p), v);
          }
          return v;
        },
      });
    return createProxy('', newData);
  }, [newData, updateData]);

  return proxyData;
};
