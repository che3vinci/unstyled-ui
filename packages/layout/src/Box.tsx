import { styled } from '@unstyled-ui/core';

//@ts-ignore
export const Box = styled('u-box', {
  display: 'flex',
  boxSizing: 'border-box',
  p: 0,
  m: 0,
  variants: {
    dbg: {
      true: {
        '&,& *': {
          outline: '1px solid rgba(220, 108, 108, 0.5)',
        },
      },
    },
  },
});
