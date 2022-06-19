//transform-origin:

import { ResponsiveInputValueType } from '..';

export const scale = (scale: ResponsiveInputValueType) => {
  return {
    transform: `scale(${scale})`,
    transformOrigin: 'center',
  };
};
