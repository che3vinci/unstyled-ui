import * as CSS from 'csstype';

export type CSSProperties = CSS.Properties<string | number>;
export type RCSSProperties = {
  [key in keyof CSSProperties]?: CSSProperties[key] | CSSProperties[key][];
};
