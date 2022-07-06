import React from 'react';
import { Box } from './Box';
import { col, vgap } from '@c3/css';
import { BaseProps } from '../stitches';

export const Col: React.FC<BaseProps> = (props) => {
  //@ts-ignore
  const { css: { gap, fx, fy, ...restCss }, ...restProps } = props;
  return <Box css={{ ...col(fx, fy), ...vgap(gap), ...restCss }} {...restProps} />;
};
