import { Direction } from '@c3/utils';
import { RCSSProperties } from '@unstyled-ui/core';
import { absXCenter } from '@unstyled-ui/layout';

export const arrow = (
  direction: 'top' | 'right' | 'bottom' | 'left'
): RCSSProperties => {
  let polygon;
  switch (direction) {
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
  return {
    clipPath: `polygon(${polygon})`,
  };
};

export const pseudoArrow = (
  direction: Direction,
  width: RCSSProperties['width'],
  height: RCSSProperties['height'],
  css?:RCSSProperties
) => {
  let pos;
  switch (direction) {
    case 'bottom':
      pos = absXCenter({ top: '100%' });
      break;
  }
  return {
    _after: {
      w: width,
      h: height,
      ...pos,
      ...arrow(direction),
      ...css,
    },
  };
};
