import { RCSSProperties } from '@unstyled-ui/css';
import { IPosition, xCenter, xyCenter, yCenter } from '../Abs';

export const fixed = (pos: IPosition): RCSSProperties => ({
  position: 'fixed',
  top: pos.top,
  left: pos.left,
  right: pos.right,
  bottom: pos.bottom,
});

export const fixedXCenter = xCenter('fixed');
export const fixedYCenter = yCenter('fixed');
export const fixedXYCenter = xyCenter('fixed');
