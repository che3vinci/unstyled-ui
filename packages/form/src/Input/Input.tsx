import { styled } from '@unstyled-ui/core';
import { absYCenter } from '@unstyled-ui/layout';

export const Input = styled('input', {
  _placeholder: {
    ...absYCenter({ left: '0em' }),
  },
  // pl: '1em',
  variants: {},
});

export const atomic: { input: typeof Input } = { input: Input };
