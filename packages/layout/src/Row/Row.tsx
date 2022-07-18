import { BaseProps } from '@unstyled-ui/core';
import React from 'react';
import { Box } from '../Box';
import { rgap } from '../utils';
import { row } from './row.utils';

export type RowProps = BaseProps;
export const Row: React.FC<RowProps> = props => {
  const {
    //@ts-ignore
    css: { fx, fy, gap, ...restCss } = {},
    ...restProps
  } = props;
  return (
    <Box
      as="u-row"
      //@ts-ignore
      css={{ ...row(fx, fy), ...rgap(gap), ...restCss }}
      {...restProps}
    />
  );
};
