import { RCSSProperties } from '@unstyled-ui/core';

export const button = (css: RCSSProperties = {}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&[disabled]': {
    cursor: 'not-allowed',
  },
  ...css,
});
