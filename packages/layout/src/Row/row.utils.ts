import { CSSProperties } from '@unstyled-ui/core';

export const row = (
  fx: CSSProperties['justifyContent'] = 'flex-start',
  fy: CSSProperties['alignItems'] = 'center'
): CSSProperties => ({
  display: 'flex',
  alignItems: fx,
  justifyContent: fy,
  flexWrap: 'nowrap',
});
