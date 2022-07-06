import { IndexedType, isUndefined, __DEV__ } from '@c3/utils';
import React from 'react';

export const isEqual = (prev: IndexedType, next: IndexedType) => {
  const prevKeys = Object.keys(prev);
  const nextKeys = Object.keys(next);
  if (prevKeys.length !== nextKeys.length) {
    return false;
  }

  let isEq = true;
  for (const key of prevKeys) {
    if (!nextKeys.includes(key)) {
      isEq = false;
      break;
    }

    if (key === 'css') {
      const isImmutable = next[key].isImmutable;
      if (isUndefined(isImmutable) || !!isImmutable) {
        if (__DEV__) {
          if (!isEqual(prev[key], next[key])) {
            throw new Error(
              `error: "css" is considered as immutable,but its value changed.
                    please set isImmutable to false`
            );
          }
        }
        continue;
      }
    }
    if (next[key] !== prev[key]) {
      isEq = false;
      break;
    }
  }
  return isEq;
};

export const memo = <P>(com: React.ComponentType<P>) => {
  return React.memo(com, isEqual);
};
