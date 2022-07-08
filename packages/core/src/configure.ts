import { RCSSProperties, Typography } from '@unstyled-ui/css';
import {
  convertResponsiveArrayForStyle,
  convertResponsiveArrayForVariant,
  createStitches,
  DefaultThemeMap,
} from '@unstyled-ui/stitches';
import type {
  ConfigType,
  CreateStitches,
} from '@unstyled-ui/stitches/types/config';

type _Config<Prefix, Theme, ThemeMap, Utils> = {
  prefix?: ConfigType.Prefix<Prefix>;
  // media?: ConfigType.Media<Media>
  theme?: ConfigType.Theme<Theme>;
  themeMap?: ConfigType.ThemeMap<ThemeMap>;
  utils?: ConfigType.Utils<Utils>;
  breakpoints?: ConfigType.Breakpoints;
  bpMapFnForVariant?: ConfigType.BPMapFnForVariant;
  bpMapFnForStyle?: ConfigType.BPMapFnForStyle;
};

// @ts-ignore
const utils = {
  w: (w: RCSSProperties['width']) => ({ width: w }),
  h: (h: RCSSProperties['height']) => ({ height: h }),
  typo: (value: Typography) => ({ ...value }),
  round: () => ({ borderRadius: 10000000 }),
};
const theme = {};

export type Config = _Config<'uu', typeof theme, DefaultThemeMap, typeof utils>;
export const config: Config = {
  prefix: 'uu',
  utils: utils,
  theme: theme,
  breakpoints: [768, 1366],
  bpMapFnForVariant: convertResponsiveArrayForVariant,
  bpMapFnForStyle: convertResponsiveArrayForStyle,
};
