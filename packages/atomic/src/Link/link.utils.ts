import {RCSSProperties} from '@unstyled-ui/core';

export const link = (props?: RCSSProperties): RCSSProperties => ({
  textDecoration: 'none',
  cursor: 'pointer',
  ...(props || {}),
});
