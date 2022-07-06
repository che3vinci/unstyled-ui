import * as CSS from 'csstype';

export type CSSProperties = CSS.Properties<string | number>;
export type RCSSProperties = {
  [key in keyof CSSProperties]?: CSSProperties[key] | CSSProperties[key][];
};

// export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

// export interface CSSObject extends CSSProperties, CSSPseudos {
//   [key: string]: CSSObject | string | number | undefined;
// }
