import { isPlainObject } from 'lodash';
import { isArray, isString } from '../lang/is';
import { IndexedType } from '../lang';

//TODO: compare with lodash.isEmpty implementation
export const isEmpty = <T>(data: T[] | IndexedType<unknown> | string) => {
  if (isArray(data) || isString(data)) {
    return data.length === 0;
  }
  if (isPlainObject(data)) {
    return Object.keys(data).length === 0;
  }
  return false;
};
