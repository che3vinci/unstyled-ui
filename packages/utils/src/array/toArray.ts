import { assert } from '../assert';
import { isArray, isNullish } from '../lang';

export const toArray = <T>(x: T[] | T): T[] => {
  assert(!isNullish(x), 'not support undefined/null value');
  if (isArray(x)) {
    return x;
  }
  return [x];
};
