import { difference } from 'lodash';

/**
 *
 * @param strict: is strict,then take the order into consideration
 * @returns
 */
export const equal = <T>(a: T[], b: T[], strict = false) => {
  if (strict) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((e, i) => e === b[i]);
  }
  return difference(a, b).length === 0;
};
