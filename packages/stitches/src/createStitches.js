import { createStitches as createStitchesCore } from '@stitches/core';
import { createStyledFunction } from './styled';
import { bp2media } from './utils';

export const createStitches = config => {
  config.media = bp2media(config.breakpoints || []);
  const instance = createStitchesCore(config);
  instance.styled = createStyledFunction({
    config: Object.assign(instance.config, config),
    css: instance.css,
  });
  return instance;
};
