import React from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Box, flexCenter } from '@unstyled-ui/layout';

export type BadgeProps = BaseProps & {
  value: string | number;
};

export const Badget: React.FC<BadgeProps> = props => {
  const { value, ...restProps } = props;
  return (
    <Box
      css={{
        round: true,
        ...flexCenter,
      }}
      {...restProps}
    >
      {value}
    </Box>
  );
};