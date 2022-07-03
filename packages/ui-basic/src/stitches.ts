import { createStitches } from '@c3/stitches';
import type { CSS, VariantProps } from '@c3/stitches/types';
import React from 'react';
const config: Parameters<typeof createStitches>[0] = {
  utils: {
    w: (value: string | number | (string | number)[]) => ({ width: value }),
  },
};
export const { styled } = createStitches(config);

// export type BaseProps = {css?: {[key in keyof CSS]: CSS[key]}};
export type BaseProps<
  Attr extends React.HTMLAttributes<HTMLElement>
> = VariantProps<any> & {
  css?: CSS<typeof config>;
} & Attr;
