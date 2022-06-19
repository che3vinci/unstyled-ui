import { assert } from '../assert';
import { GetValue, PlainObject } from '../lang';
import { isArray } from '../lang/is';

export const find = <T extends PlainObject<GetValue<T>>>(
  arr: T[],
  key: keyof T,
  value: GetValue<T>
): T => {
  assert(isArray(arr), 'Not  Array');
  return arr.find((e: T) => e[key] === value) || ({} as T);
};
