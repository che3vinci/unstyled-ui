import { isNumber, isString } from '@c3/utils';
export const px = (x: number | string) => {
  if ((isString(x) && !x.endsWith('px')) || isNumber(x)) {
    return `${x}px`;
  }
  if (x.endsWith('px')) {
    return x;
  }
  throw new Error('px:error');
};
