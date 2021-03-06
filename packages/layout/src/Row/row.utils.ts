import {  RCSSProperties } from '@unstyled-ui/core';

export const row = (
  fx: RCSSProperties['justifyContent'] = 'flex-start',
  fy: RCSSProperties['alignItems'] = 'center'
): RCSSProperties => ({
  display: 'flex',
  alignItems: fy,
  justifyContent: fx,
  flexWrap: 'nowrap',
});
