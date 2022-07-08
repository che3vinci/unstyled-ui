import { CSS } from '@unstyled-ui/stitches';

export const rgap = (gap: CSS['gap']): CSS => ({
  '& > *:not(:last-child)': {
    marginRight: gap,
  },
});

export const vgap = (gap: CSS['gap']): CSS => ({
  '& > *:not(:last-child)': {
    marginBottom: gap,
  },
});
