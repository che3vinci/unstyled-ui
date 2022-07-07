import React from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Box, flexCenter } from '@unstyled-ui/layout';

export type BadgeProps = BaseProps & {
  value: string | number;
};

export const Badge: React.FC<BadgeProps> = props => {
  const { value, ...restProps } = props;
  return (
    <Box round {...flexCenter} {...restProps}>
      {value}
    </Box>
  );
};
