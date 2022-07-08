import { styled } from '@unstyled-ui/core';
// import { createStitches } from '@stitches/react';
// const { styled } = createStitches({
//   utils: {
//     round: () => ({ borderRadius: '50%' }),
//   },
// });

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
});
