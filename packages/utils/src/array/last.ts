import { assert } from '..';

export const last = <T>(arr: T[]): T => {
  assert(arr.length >= 1);
  return arr[arr.length - 1];
};

export const first = <T>(arr: T[]): T => {
  assert(arr.length >= 1);
  return arr[0];
};
