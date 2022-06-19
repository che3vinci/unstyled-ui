import { IndexedType } from '../lang';
import { assign } from './../object/assign';

export type CfgObj<T extends IndexedType<unknown>, K extends string> = {
  [key in K]?: CfgObj<T, K> | T;
} & {
  base?: T;
};
export const mergeBaseAndGet = <
  T extends IndexedType<unknown>,
  K extends string
>(
  obj: CfgObj<T, K>,
  path: string
): T => {
  const segs = path.split('.') as K[];
  const base = {};
  let cur = obj;
  for (const seg of segs) {
    if (seg === 'base') {
      throw new Error(`invalid path:${path}`);
    }
    assign(base, cur['base'] || {});
    const next = cur[seg] || {};
    cur = next as CfgObj<T, K>;
  }
  return assign(base, cur);
};
