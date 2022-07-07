import type { CSS, VariantProps } from '@unstyled-ui/stitches';
import { Config } from './configure';

export type BaseProps<
  Attr extends React.HTMLAttributes<HTMLElement> = React.HTMLAttributes<HTMLElement>
> = VariantProps<any> & {
  css?: CSS<Config>;
} & Attr;
