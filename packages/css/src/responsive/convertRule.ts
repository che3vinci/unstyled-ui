import { toArray } from '@c3/utils';
import { ResponsiveInputValueType } from '..';
import { ResponsiveOutputValueType } from './type';
import { origin, rvw } from './vw';

export type RcssConvertFn = (
  values: ResponsiveInputValueType
) => ResponsiveOutputValueType;

//[mobile,laptop,desktop]
export const defaultRule: RcssConvertFn = (
  value: ResponsiveInputValueType
): ResponsiveOutputValueType => {
  const values = toArray(value);
  switch (values.length) {
    case 1: {
      const v = values[0];
      return [rvw(v), rvw(v), origin(v)];
    }
    case 2:
      return [rvw(values[0]), rvw(values[1]), origin(values[1])];
    case 3:
      return [rvw(values[0]), rvw(values[1]), origin(values[2])];
    default:
      throw new Error(`invalid para:${JSON.stringify(values)} `);
  }
};
