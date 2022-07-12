import { Direction } from '@c3/utils';
import React from 'react';
import { Box } from '@unstyled-ui/layout';
import type { BaseProps } from '@unstyled-ui/core';

export interface IArrowProps extends Omit<BaseProps, 'direction'> {
  directionx: Direction;
}

export const Arrow: React.FC<IArrowProps> = ({
  directionx = 'left',
  width,
  height,
  ...props
}) => {
  let polygon;
  switch (directionx) {
    case 'top':
      polygon = '50% 0%, 0% 100%, 100% 100%';
      break;
    case 'bottom':
      polygon = '0% 0%, 50% 100%, 100% 0%';
      break;
    case 'left':
      polygon = '100% 0%, 0% 50%, 100% 100%';
      break;
    case 'right':
      polygon = '0% 0%, 0% 100%, 100% 50%';
      break;
  }
  return (
    <Box
      className="uu-arrow"
      css={{ width, height, clipPath: `polygon(${polygon})` }}
      {...props}
    />
  );
};
