import {
  convertResponsiveArrayForStyle,
  convertResponsiveArrayForVariant,
  createStitches,
} from '@styless/stitches';
import type { CSS, VariantProps } from '@styless/stitches/types';
import { Typography } from '@styless/css';
import React from 'react';
const config: Parameters<typeof createStitches>[0] = {
  utils: {
    w: (value: string | number | (string | number)[]) => ({ width: value }),
    typo: (value: Typography) => ({ ...value }),
  },
  breakpoints: [768, 1366],
  bpMapFnForVariant: convertResponsiveArrayForVariant,
  bpMapFnForStyle: convertResponsiveArrayForStyle,
};
export const { styled } = createStitches(config);

export type BaseProps<
  Attr extends React.HTMLAttributes<HTMLElement> = React.HTMLAttributes<HTMLElement>
> = VariantProps<any> & {
  css?: CSS<typeof config>;
} & Attr;
