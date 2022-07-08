//transform-origin:

import { CSSProperties } from '../types';

export const scale = (scale: CSSProperties['scale']) => {
  return {
    transform: `scale(${scale})`,
    transformOrigin: 'center',
  };
};
