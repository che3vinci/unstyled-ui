import type { CSS } from '@unstyled-ui/stitches/types/css-util.d';
import type { Config } from './configure';
import type { VariantProps } from '@unstyled-ui/stitches';
import type { CSSProperties } from '@unstyled-ui/stitches';
export type { CSSProperties } from '@unstyled-ui/stitches';

export type RCSSProperties = {
  [k in keyof CSSProperties]?: CSSProperties[k] | CSSProperties[k][];
};

export type CSSProps = CSS<
  Record<string, never>,
  Config['theme'],
  Config['themeMap'],
  Config['utils']
>;
export type RCSSProps = {
  [K in keyof CSSProps]?: CSSProps[K] | CSSProps[K][];
};

export type BaseProps<
  Attr extends React.HTMLAttributes<HTMLElement> = React.HTMLAttributes<HTMLElement>
> = VariantProps<any> & {
  css?: RCSSProps;
} & Attr;
