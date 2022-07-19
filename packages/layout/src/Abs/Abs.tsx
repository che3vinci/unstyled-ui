import { BaseProps } from '@unstyled-ui/core';
import { Box } from '../Box';
import React from 'react';

export const Abs: React.FC<BaseProps> = props => {
  const { css, ...restProps } = props;
  return (
    //@ts-ignore
    <Box as="u-abs" css={{ ...css, position: 'absolute' }} {...restProps} />
  );
};
