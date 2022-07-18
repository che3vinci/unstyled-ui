import { styled } from '@unstyled-ui/core';

export const Box = styled('u-box', {
  display: 'flex',
  boxSizing: 'border-box',
  p: 0,
  m: 0,
  variants: {
    dbg: {
      true: {
        '&,& *': {
          outline: '1px solid rgba(255, 0, 0, 0.5)',
        },
      },
    },
  },
});
