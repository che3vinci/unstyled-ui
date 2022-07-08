import type { CSS } from '@unstyled-ui/stitches/types/css-util.d';
import type { Config } from './configure';
import type { VariantProps } from '@unstyled-ui/stitches';

export type CSSProperties = CSS<
  Record<string, never>,
  Config['theme'],
  Config['themeMap'],
  Config['utils']
>;
export type RCSSProperties = {
  [k in keyof CSSProperties]: CSSProperties[k] | CSSProperties[k][];
};

export type CSSValue<T> = T extends keyof CSSProperties
  ? CSSProperties[T]
  : never;

export type RCSSValue<T> = T extends keyof CSSProperties
  ? CSSValue<T> | CSSValue<T>[]
  : never;

export type BaseProps<
  Attr extends React.HTMLAttributes<HTMLElement> = React.HTMLAttributes<HTMLElement>
> = VariantProps<any> & {
  css?: CSSProperties;
} & Attr;
