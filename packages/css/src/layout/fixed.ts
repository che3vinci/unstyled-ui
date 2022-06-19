import { IPosition } from '.';
import { xCenter, xyCenter, yCenter } from './abs';

export const fixed = (pos: IPosition) => ({
  position: 'fixed',
  top: pos.top,
  left: pos.left,
  right: pos.right,
  bottom: pos.bottom,
});

export const fixedXCenter = xCenter('fixed');
export const fixedYCenter = yCenter('fixed');
export const fixedXYCenter = xyCenter('fixed');
