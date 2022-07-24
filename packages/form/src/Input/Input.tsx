import { styled } from '@unstyled-ui/core';
import { absYCenter } from '@unstyled-ui/layout';

export const Input = styled('input', {
  _placeholder: {
    ...absYCenter(),
  },
  appearance: 'none',
  outline: 'none',
});
