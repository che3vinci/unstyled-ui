import { toArray } from '@c3/utils';
import { ResponsiveCSSProperties, ResponsiveInputValueType } from '../';
import { CSSObject } from '../types';
import * as CSS from 'csstype';
export const nCol = (
  num: ResponsiveInputValueType,
  width: CSS.Properties['width'] | CSS.Properties['width'][],
  height: CSS.Properties['height'] | CSS.Properties['width'][],
  rgap: CSS.Properties['rowGap'] | CSS.Properties['rowGap'][] = [0],
  cgap: CSS.Properties['columnGap'] | CSS.Properties['columnGap'][] = [0]
) => {
  const _nums = toArray(num);
  const _widths = toArray(width);
  if (_nums.length !== _widths.length) {
    throw new Error('must have same length');
  }
  return {
    display: 'grid',
    justifyContent: 'center',
    gridAutoRows: height,
    rowGap: rgap,
    columnGap: cgap,
    gridTemplateColumns: _nums.map((e, idx) => `repeat(${e}, ${_widths[idx]}px)`),
  };
};
