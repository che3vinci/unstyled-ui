import { css } from 'styled-components';
import { rcss, ResponsiveInputValueType } from '../';

export const gap = (gap: ResponsiveInputValueType) => {
  return `& > *:not(:last-child) {
    ${rcss({
      marginRight: gap,
    })}
  }`;
};

export const vgap = (gap: ResponsiveInputValueType | string) => {
  const md = Array.isArray(gap)
    ? rcss({
        marginBottom: gap,
      })
    : `margin-bottom:${gap}`;

  return css`
    & > *:not(:last-child) {
      ${md}
    }
  `;
};
