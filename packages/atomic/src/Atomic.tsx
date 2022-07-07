import { useStitches } from '@unstyled-ui/core';

export const Atomic = () => {
  const { styled } = useStitches();
  return styled('div', {
    boxSizing: 'border-box',
  });
};
