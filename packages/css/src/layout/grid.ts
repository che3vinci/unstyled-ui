import { css } from 'styled-components';
import { rcss, ResponsiveInputValueType, toResponsiveArray } from '../';

export const nCol = (
  num: ResponsiveInputValueType,
  width: ResponsiveInputValueType,
  height: ResponsiveInputValueType,
  rgap: ResponsiveInputValueType = [0],
  cgap: ResponsiveInputValueType = [0]
) => {
  const _num = toResponsiveArray(num);
  const _width = toResponsiveArray(width);
  if (_num.length !== _width.length) {
    throw new Error('must have same length');
  }
  return css`
    display: grid;
    justify-content: center;
    ${rcss({
      gridTemplateColumns: _num.map(
        (e, idx) => `repeat(${e}, ${_width[idx]}px)`
      ) as ResponsiveInputValueType,
      gridAutoRows: height,
      rowGap: rgap,
      columnGap: cgap,
    })}
    ${rcss({})}
  `;
};
