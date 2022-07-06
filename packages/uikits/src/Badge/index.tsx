import { flexCenter } from '@unstyled-ui/css';
import React from 'react';
import { BaseProps } from '../Common';
import { Box } from '../layout/Box';

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
