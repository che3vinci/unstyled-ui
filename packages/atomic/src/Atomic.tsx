import { styled } from '@unstyled-ui/core';

export const Atomic = styled('div', {
  boxSizing: 'border-box',
  variants: {
    round: {
      true: {
        borderRadius: '100000px',
      },
    },
  },
});
