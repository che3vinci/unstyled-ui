import _ from 'lodash';
import { immutableAssign } from '../object/assign';
import { isPrimitive } from '../lang';

// NOTE: Array.fill(length,object) will share the object
export const makeArray = <T>(length: number, value: T): T[] => {
  if (isPrimitive(value)) {
    return Array(length).fill(value);
  }
  return _.times(length, () => immutableAssign(value));
};
