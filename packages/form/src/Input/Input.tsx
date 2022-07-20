import { styled } from '@unstyled-ui/core';
import { absYCenter } from '@unstyled-ui/layout';

export const Input = styled('input', {
  _placeholder: {
    ...absYCenter({ left: '0em' }),
  },
  '&:focus': {},
  variants: {
    status: {
      error: { border: '1px solid red' },
      focus: {},
    },
  },
});

export const atomic: { input: typeof Input } = { input: Input };
