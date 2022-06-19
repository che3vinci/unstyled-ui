import { toArray } from '@c3/utils';
import { CSSRawInputValueType, ResponsiveInputValueType } from '.';

// has same value on different plateform(mobile and desktop)
export const isCSSInputValueType = (
  x: ResponsiveInputValueType
): x is CSSRawInputValueType => {
  return (
    typeof x === 'string' || typeof x === 'number' || typeof x == 'boolean'
  );
};

export const toResponsiveArray = toArray;
