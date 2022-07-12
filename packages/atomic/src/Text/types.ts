import { RCSSProperties } from 'packages/core';

export type Typography = {
  fontSize: RCSSProperties['fontSize'];
  fontWeight: RCSSProperties['fontWeight'];
  lineHeight?: RCSSProperties['lineHeight'];
  letterSpacing?: RCSSProperties['letterSpacing'];
  fontFamily?: RCSSProperties['fontFamily'];
};
