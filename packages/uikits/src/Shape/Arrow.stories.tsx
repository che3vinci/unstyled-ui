import { pseudoArrow } from '@unstyled-ui/css';
import { Box } from '@unstyled-ui/layout';
import React from 'react';
import { Arrow } from './Arrow';

export default {
  component: Arrow,
};
export const Left = () => (
  <Arrow directionx="left" css={{ w: 100, h: 50, background: 'red' }} />
);
export const Right = () => (
  <Arrow directionx="right" css={{ w: 200, h: 50, background: 'red' }} />
);
export const Bottom = () => (
  <Arrow directionx="bottom" css={{ w: 200, h: 50, background: 'red' }} />
);
export const Top = () => (
  <Arrow directionx="top" css={{ w: 100, h: 50, background: 'red' }} />
);

export const PseudoArrow = () => (
  <Box
    css={{
      w: 100,
      h: 100,
      background: 'green',
      ...pseudoArrow('bottom', 90, 30, { background: 'red' }),
    }}
  ></Box>
);
