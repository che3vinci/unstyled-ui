import { RCSSProperties } from '@unstyled-ui/css';
import { CSS } from '@unstyled-ui/stitches';

export const rgap = (gap: RCSSProperties['gap']): CSS => ({
  '& > *:not(:last-child)': {
    marginRight: gap,
  },
});

export const vgap = (gap: RCSSProperties['gap']): CSS => ({
  '& > *:not(:last-child)': {
    marginBottom: gap,
  },
});
