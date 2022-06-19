import { toArray } from '../array';
import { isNullish, PlainObject } from '../lang';

export const pick = <T extends PlainObject, K extends keyof T>(
  srcObj: T,
  fields: K[],
  includingNullish = false
): Pick<T, K> => {
  const clone = {} as Pick<T, K>;
  const _fields = toArray(fields);
  for (const k of _fields) {
    if (!isNullish(srcObj[k])) {
      clone[k] = srcObj[k];
    } else if (includingNullish) {
      clone[k] = srcObj[k];
    }
  }
  return clone;
};
