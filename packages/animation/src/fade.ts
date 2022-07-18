import { keyframes } from '@unstyled-ui/core';

export const fade = (opacity = 0) =>
  keyframes({
    '100%': { opacity },
  });
