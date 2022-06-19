import { ResponsiveInputValueType } from '..';
import { ResponsiveCSSProperties } from './../responsive/type';

export type Typography = {
  fontSize: ResponsiveInputValueType;
  fontWeight: ResponsiveInputValueType;
  lineHeight?: ResponsiveInputValueType;
  letterSpacing?: ResponsiveInputValueType;
  fontFamily?: ResponsiveInputValueType;
};

export const typo = ({
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  letterSpacing,
}: Typography): ResponsiveCSSProperties => {
  return {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing,
  };
};
