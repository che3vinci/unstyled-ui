import { utils } from './util';
import {
  convertResponsiveArrayForStyle,
  convertResponsiveArrayForVariant,
  DefaultThemeMap,
} from '@unstyled-ui/stitches';
import type { ConfigType } from '@unstyled-ui/stitches/types/config';

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
