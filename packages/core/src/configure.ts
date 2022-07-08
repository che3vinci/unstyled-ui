import { CSSProperties, Typography } from '@unstyled-ui/css';
import {
  convertResponsiveArrayForStyle,
  convertResponsiveArrayForVariant,
  createStitches,
} from '@unstyled-ui/stitches';

export type Config = NonNullable<Parameters<typeof createStitches>[0]>;

export const config: Config = {
  prefix: 'uu',
  utils: {
    w: (value: CSSProperties['width']) => ({ width: value }),
    typo: (value: Typography) => ({ ...value }),
    round: () => ({ borderRadius: 10000000 }),
  },
  breakpoints: [768, 1366],
  bpMapFnForVariant: convertResponsiveArrayForVariant,
  bpMapFnForStyle: convertResponsiveArrayForStyle,
};
