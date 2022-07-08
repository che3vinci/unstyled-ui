import React from 'react';
import { Box } from '../Box';
import { BaseProps } from '@unstyled-ui/core';
import { row } from './row.utils';
import { rgap } from '../utils';

export const Row: React.FC<BaseProps> = props => {
  const {
    //@ts-ignore
    css: { gap, fx, fy, ...restCss },
    ...restProps
  } = props;
  return (
    <Box
      css={{ ...row(fx, fy), ...rgap(gap), ...restCss }}
      data-id="c3-row"
      {...restProps}
    />
  );
};
