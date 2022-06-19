import { Fn } from './famous';

export const isNullish = (x: unknown): x is undefined | null =>
  x === undefined || x === null;
export const isString = (x: unknown): x is string => typeof x === 'string';
export const isNumber = (x: unknown): x is number => typeof x === 'number';
export const isSymbol = (x: unknown): x is symbol => typeof x === 'symbol';
export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';
export const isBigint = (x: unknown): x is bigint => typeof x === 'bigint';
export const isFunction = (x: unknown): x is Fn => typeof x === 'function';
export const isNull = (x: unknown): x is null => x === null;
export const isUndefined = (x: unknown): x is undefined => x === undefined;
export const isArray = (x: unknown): x is Array<unknown> => Array.isArray(x);
export const isObject = (x: unknown): x is object => {
  const type = typeof x;
  return (type === 'object' || type === 'function') && x !== null;
};

export const isPrimitive = (x: unknown) =>
  isNullish(x) ||
  isString(x) ||
  isSymbol(x) ||
  isBoolean(x) ||
  isBigint(x) ||
  isNumber(x);

export const isDecimal = (x: unknown) =>
  isNumber(x) && parseInt(`${x}`, 10) !== x;

export const isInteger = (x: unknown) =>
  isNumber(x) && parseInt(`${x}`, 10) === x;

export const isPlainObject = (x: unknown): x is object =>
  isObject(x) &&
  (Object.getPrototypeOf(x) === null ||
    Object.getPrototypeOf(x) === Object.prototype);
