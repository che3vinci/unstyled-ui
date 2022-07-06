import * as CSS from 'csstype';

export const link = (props?: CSS.Properties): CSS.Properties => ({
  textDecoration: 'none',
  cursor: 'pointer',
  ...(props || {}),
});
