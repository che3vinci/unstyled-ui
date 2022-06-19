import { Direction, getAntiDirectin } from '@c3/utils';
import { css } from 'styled-components';
import { rcss, ResponsiveInputValueType, toResponsiveArray } from '..';

export const arrow = (
  direction: Direction,
  width: ResponsiveInputValueType, //border-width
  height: ResponsiveInputValueType,
  pos: ResponsiveInputValueType = ['50%'],
  color: ResponsiveInputValueType = ['currentColor']
) => {
  const anti: Direction = getAntiDirectin(direction);
  const _width = toResponsiveArray(width);
  const _height = toResponsiveArray(height);
  let _pos;
  switch (direction) {
    case 'left':
    case 'right':
      _pos = `top:${pos};transform:translateY(-50%);`;
      break;
    case 'top':
    case 'bottom':
      _pos = `left:${pos};transform:translateX(-50%);`;
      break;
    default:
      throw new Error('not supported');
  }
  return css`
    position: relative;

    &::before {
      position: absolute;
      display: inline-block;
      width: 0;
      height: 0;
      content: '';
      z-index: 1;
      ${_pos};
      ${rcss({
        [direction]: direction,
        border: 'solid transparent',
        [`border-${direction}`]: 'none',
        [`border-${anti}`]: [`${width} solid ${color}`],
      })}
    }
  `;
};
