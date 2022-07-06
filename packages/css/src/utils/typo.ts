import { RCSSProperties } from './../types';

export type Typography = {
  fontSize: RCSSProperties['fontSize'];
  fontWeight: RCSSProperties['fontWeight'];
  lineHeight?: RCSSProperties['lineHeight'];
  letterSpacing?: RCSSProperties['letterSpacing'];
  fontFamily?: RCSSProperties['fontFamily'];
};

export const typo = ({
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  letterSpacing,
}: Typography): RCSSProperties => {
  return {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing,
  };
};
