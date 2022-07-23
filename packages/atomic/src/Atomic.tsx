import { styled } from '@unstyled-ui/core';

export const Atomic = styled('div', {
  boxSizing: 'border-box',
  p: 0,
  m: 0,
  '&[role="button"]': {
    cursor: 'pointer',
  },
  '&[role="button"][disabled]': {
    cursor: 'not-allowed',
  },
  '&[role="button"]:not([disabled])': {
    cursor: 'pointer',
  },
  '&[role="button"]:not([disabled]):hover': {
    opacity: 0.95,
  },
  variants: {
    round: {
      true: {
        borderRadius: '100000px',
      },
    },
  },
});
