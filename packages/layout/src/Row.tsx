import React from 'react';
import { Box } from './Box';
import { row, rgap } from '@unstyled-ui/css';
import { BaseProps } from '@unstyled-ui/core';


export const Row: React.FC<BaseProps> = (props) => {
  //@ts-ignore
  const { css: { gap, fx, fy, ...restCss }, ...restProps } = props;
  return <Box css={{ ...row(fx, fy), ...rgap(gap), ...restCss }} data-id="c3-row" {...restProps} />;
};

