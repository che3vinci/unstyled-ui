import { RCSSProperties } from '@unstyled-ui/core';

export type Typography = {
  fontSize: RCSSProperties['fontSize'];
  fontWeight: RCSSProperties['fontWeight'];
  lineHeight?: RCSSProperties['lineHeight'];
  letterSpacing?: RCSSProperties['letterSpacing'];
  fontFamily?: RCSSProperties['fontFamily'];
};
