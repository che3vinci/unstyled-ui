import { IndexedType, isObject, Key } from '../lang';

export const keys = <T extends IndexedType<any>>(obj: T): (keyof T)[] =>
  Object.keys(obj);

export const hasIn = (obj: object, key: Key) => isObject(obj) && key in obj;
export const hasOwn = (obj: object, key: Key) =>
  isObject(obj) && Object.prototype.hasOwnProperty.call(obj, key);
