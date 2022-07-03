import { ResponsiveInputValueType } from '../';

export const rgap = (gap: ResponsiveInputValueType) => ({
  '& > *:not(:last-child)': {
    marginRight: gap,
  },
});

export const vgap = (gap: ResponsiveInputValueType) => ({
  '& > *:not(:last-child)': {
    marginBottom: gap,
  },
});
