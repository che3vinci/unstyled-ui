import type { CSSProperties } from 'react';

export const col = (
  fx: CSSProperties['alignItems'] = 'center',
  fy: CSSProperties['justifyContent'] = 'flex-start'
) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: fx,
    justifyContent: fy,
  };
};
