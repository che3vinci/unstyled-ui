import { Direction } from '@c3/utils';
import React from 'react';
import { Box } from '@unstyled-ui/layout';
import type { BaseProps } from '@unstyled-ui/core';
import { arrow } from '@unstyled-ui/css';

export interface ArrowProps extends Omit<BaseProps, 'direction'> {
  directionx: Direction;
}

export const Arrow: React.FC<ArrowProps> = ({
  directionx = 'left',
  css = {},
  ...restProps
}) => {
  return (
    <Box
      className="uu-arrow"
      css={{ ...arrow(directionx), ...css }}
      {...restProps}
    />
  );
};
