//transform-origin:

import { CSSProperties } from '@unstyled-ui/core';

export const scale = (scale: CSSProperties['scale']) => {
  return {
    transform: `scale(${scale})`,
    transformOrigin: 'center',
  };
};
