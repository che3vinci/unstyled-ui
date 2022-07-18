import { styled } from '@unstyled-ui/core';

export const Atomic = styled('div', {
  boxSizing: 'border-box',
  p: 0,
  m: 0,
  variants: {
    round: {
      true: {
        borderRadius: '100000px',
      },
    },
  },
});
