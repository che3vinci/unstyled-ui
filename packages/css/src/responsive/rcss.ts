import { cssConfig } from './cssConfig';
import { genCss } from './gencss';
import { ResponsiveCSSProperties } from './type';

export const rcss = (
  css: ResponsiveCSSProperties,
  breakpoints: number[] = cssConfig.breakPoints
) => {
  return genCss(css, cssConfig.convertRule, breakpoints);
};
