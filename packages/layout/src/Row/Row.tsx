import React from 'react';
import { Box } from '../Box';
import { BaseProps } from '@unstyled-ui/core';
import { row } from './row.utils';
import { rgap } from '../utils';
import { CSSProperties } from '@stitches/react';

export type RowProps = {
  fx?: CSSProperties['justifyContent'];
  fy?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
} & BaseProps;
export const Row: React.FC<RowProps> = props => {
  const {
    //@ts-ignore
    css = {},
    fx,
    fy,
    gap,
    ...restProps
  } = props;
  return (
    <Box
      //@ts-ignore
      css={{ ...row(fx, fy), ...rgap(gap), ...css }}
      {...restProps}
    />
  );
};
