import { CSSProperties, RCSSProperties } from '@unstyled-ui/core';

export const link = (props: CSSProperties = {}): CSSProperties => ({
  textDecoration: 'none',
  cursor: 'pointer',
  ...props,
});
