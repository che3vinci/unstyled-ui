import type { Direction } from './lang';

export const getAntiDirectin = (direction: Direction): Direction => {
  switch (direction) {
    case 'bottom':
      return 'top';
    case 'top':
      return 'bottom';
    case 'left':
      return 'right';
    case 'right':
      return 'left';
    default:
      throw new Error('not existed');
  }
};
