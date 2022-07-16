import { keyframes } from '@unstyled-ui/core';

export const translate = (x: number, y: number) =>
  keyframes({
    '100%': { transform: `translate(${x}px, ${y}px)` },//fixme: use 'vw'
  });
