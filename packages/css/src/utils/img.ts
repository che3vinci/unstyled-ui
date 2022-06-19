import { css } from 'styled-components';
import { rcss, ResponsiveInputValueType } from '../';

export type ObjectFit = 'contain' | 'cover' | 'fill' | 'none';
export const img = (
  width: ResponsiveInputValueType,
  height: ResponsiveInputValueType,
  objectFit: ObjectFit = 'cover'
) => {
  return css`
    ${rcss({
      width,
      height,
    })};
    object-fit: ${objectFit};
    max-width: 100%;
  `;
};
