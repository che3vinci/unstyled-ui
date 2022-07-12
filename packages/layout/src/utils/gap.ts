import { CSSProps } from '@unstyled-ui/core';

export const rgap = (gap: CSSProps['gap']): CSSProps => ({
  '& > *:not(:last-child)': {
    marginRight: gap,
  },
});

export const vgap = (gap: CSSProps['gap']): CSSProps => ({
  '& > *:not(:last-child)': {
    paddingBottom: gap,
  },
});
