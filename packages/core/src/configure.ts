import { Typography } from '@unstyled-ui/css';
import {
  convertResponsiveArrayForStyle,
  convertResponsiveArrayForVariant,
  createStitches,
} from '@unstyled-ui/stitches';

export type Config = NonNullable<Parameters<typeof createStitches>[0]>;

export const config: Config = {
  utils: {
    w: (value: string | number | (string | number)[]) => ({ width: value }),
    typo: (value: Typography) => ({ ...value }),
  },
  breakpoints: [768, 1366],
  bpMapFnForVariant: convertResponsiveArrayForVariant,
  bpMapFnForStyle: convertResponsiveArrayForStyle,
};
