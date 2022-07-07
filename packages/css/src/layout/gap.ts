import { RCSSProperties } from '../types';

export const rgap = (gap: RCSSProperties['gap']) => ({
  '& > *:not(:last-child)': {
    marginRight: gap,
  },
});

export const vgap = (gap: RCSSProperties['gap']) => ({
  '& > *:not(:last-child)': {
    marginBottom: gap,
  },
});
