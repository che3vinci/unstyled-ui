import { isPrimitive } from '../lang';

// isEqualByContent
export const isEqual = (x: unknown, y: unknown) => {
  if (isPrimitive(x) && isPrimitive(y)) {
    return x === y;
  }
  return JSON.stringify(x) === JSON.stringify(y);
};
