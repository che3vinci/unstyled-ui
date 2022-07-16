import { Arrow } from './Arrow';
import React from 'react';

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
