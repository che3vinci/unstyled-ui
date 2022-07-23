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

const theme = {
  colors: {
    white09: 'rgba(255,255,255,0.9)',
    white08: 'rgba(255,255,255,0.8)',
    white07: 'rgba(255,255,255,0.7)',
    white06: 'rgba(255,255,255,0.6)',
    white05: 'rgba(255,255,255,0.5)',
    white04: 'rgba(255,255,255,0.4)',
    white03: 'rgba(255,255,255,0.3)',
    white02: 'rgba(255,255,255,0.2)',
    white01: 'rgba(255,255,255,0.1)',
    white: '#fff',
    gray200: '#fafafa',
    gray300: '#CBD5E0',
    gray400: '#A0AEC0',
    gray500: '#718096',
    gray600: '#4A5568',
    gray700: '#2D3748',
    gray800: '#1A202C',
    gray900: '#0A0C0D',
    blue500: 'hsl(206,100%,50%)',
    purple500: 'hsl(252,78%,60%)',
    green500: 'hsl(148,60%,60%)',
    red500: 'hsl(352,100%,62%)',
  },
};

export type Config = _Config<'', typeof theme, DefaultThemeMap, typeof utils>;
export const config: Config = {
  prefix: '',
  utils: utils,
  theme: theme,
  breakpoints: [768, 1366],
  bpMapFnForVariant: convertResponsiveArrayForVariant,
  bpMapFnForStyle: convertResponsiveArrayForStyle,
};
