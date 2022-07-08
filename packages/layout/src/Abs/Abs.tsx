import { BaseProps } from '@unstyled-ui/core';
import { Box } from '../Box';
import React from 'react';

export const Abs: React.FC<BaseProps> = props => {
  const { css, ...restProps } = props;
  return <Box css={{ ...css, position: 'absolute' }} {...restProps} />;
};
