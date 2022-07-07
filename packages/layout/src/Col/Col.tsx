import React from 'react';
import { Box } from '../Box';
import { BaseProps } from '@unstyled-ui/core';
import { col } from './col.utils';
import { vgap } from '../utils';

export const Col: React.FC<BaseProps> = props => {
  const {
    //@ts-ignore
    css: { gap, fx, fy, ...restCss },
    ...restProps
  } = props;
  return (
    <Box css={{ ...col(fx, fy), ...vgap(gap), ...restCss }} {...restProps} />
  );
};
