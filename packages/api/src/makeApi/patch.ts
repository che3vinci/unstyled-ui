import {
  assert,
  entries,
  IndexedType,
  isArray,
  isNullish,
  isNumber,
  isObject,
  isString,
  PlainObject,
} from '@c3/utils';
import { cloneDeep, isPlainObject } from 'lodash';

const patchEmptyObject = (refObj: IndexedType) => {
  assert(isObject(refObj), 'refObj is not object');
  const res: IndexedType = {};
  for (const [key, value] of entries(refObj)) {
    if (isPlainObject(value)) {
      res[key] = patchEmptyObject(value);
    } else {
      res[key] = getPatch(undefined, value);
    }
  }
  return res;
};

const getPatch = (target: null | undefined, ref: any) => {
  assert(isNullish(target), 'target isnot nullish ');

  if (isString(ref)) {
    return '';
  }
  if (isNumber(ref)) {
    return Number.NaN; // NaN is better than 0
  }
  if (isArray(ref)) {
    return [];
  }
  if (isObject(ref)) {
    return patchEmptyObject(ref);
  }
  return '';
};

const innerPatch = (target: IndexedType, refObj: IndexedType) => {
  if (isPlainObject(refObj) && isPlainObject(target)) {
    for (const [key, value] of entries(refObj)) {
      const targetValue = target[key];
      if (!isNullish(value) && isNullish(targetValue)) {
        target[key] = getPatch(targetValue, value);
        continue;
      }
      if (isObject(targetValue) && isObject(value)) {
        const res = innerPatch(targetValue, value);
        target[key] = res;
      }
    }
  } else if (isArray(refObj) && isArray(target)) {
    // NOTE: list from server is more longer than mock data
    for (const [idx, e] of entries(target)) {
      const refValue = refObj[0];
      if (isObject(e) && isObject(refValue)) {
        target[idx as number] = innerPatch(e, refValue);
      }
      // ignore primitive[]
    }
  }
  //throw error
  return target;
};

export const patch = (
  origin: IndexedType,
  refObj: PlainObject
): IndexedType => {
  const ret = cloneDeep(origin);
  return innerPatch(ret, refObj);
};
