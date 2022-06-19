import type { CSSProperties } from 'react';
import { CSSObject } from 'styled-components';

export const col = (
  fx: CSSProperties['alignItems'] = 'center',
  fy: CSSProperties['justifyContent'] = 'flex-start'
): CSSObject => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: fx,
    justifyContent: fy,
  };
};
