
/**
 * child div height can not be 100% when height of parent is auto
 * @returns
 */
export const eqHeight = () => ({
  display: 'flex',
  alignItems: 'stretch',
  '&& > *': {
    height: 'auto',
  },
});
