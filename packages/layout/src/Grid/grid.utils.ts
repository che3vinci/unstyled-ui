import { toArray } from '@c3/utils';
import { RCSSProperties } from '@unstyled-ui/core';
export const nCol = (
  num: number | number[],
  width: RCSSProperties['width'],
  height: RCSSProperties['height'],
  rgap: RCSSProperties['rowGap'] = 0,
  cgap: RCSSProperties['columnGap'] = 0
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
    gridTemplateColumns: _nums.map(
      (e, idx) => `repeat(${e}, ${_widths[idx]}px)`
    ),
  };
};
