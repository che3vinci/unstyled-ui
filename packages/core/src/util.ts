import { RCSSProperties } from './types';
type Typography = {
  fontSize: RCSSProperties['fontSize'];
  fontWeight: RCSSProperties['fontWeight'];
  lineHeight?: RCSSProperties['lineHeight'];
  letterSpacing?: RCSSProperties['letterSpacing'];
  fontFamily?: RCSSProperties['fontFamily'];
};

export const utils = {
  w: (w: RCSSProperties['width']) => ({ width: w }),
  h: (h: RCSSProperties['height']) => ({ height: h }),
  minW: (minW: RCSSProperties['minWidth']) => ({ minWidth: minW }),
  minH: (minH: RCSSProperties['minHeight']) => ({ minHeight: minH }),
  maxW: (maxW: RCSSProperties['maxWidth']) => ({ maxWidth: maxW }),
  maxH: (maxH: RCSSProperties['maxHeight']) => ({ maxHeight: maxH }),

  //typo
  typo: (value: Typography) => ({ ...value }),

  //margin
  m: (m: RCSSProperties['margin']) => ({ margin: m }),
  mt: (m: RCSSProperties['marginTop']) => ({ marginTop: m }),
  mr: (m: RCSSProperties['marginRight']) => ({ marginRight: m }),
  mb: (m: RCSSProperties['paddingBottom']) => ({ marginBottom: m }),
  ml: (m: RCSSProperties['marginLeft']) => ({ marginLeft: m }),
  mx: (mx: {
    ml: RCSSProperties['marginLeft'];
    mr: RCSSProperties['marginRight'];
  }) => ({ marginLeft: mx.ml, marginRight: mx.mr }),
  my: (my: {
    mt: RCSSProperties['marginTop'];
    mb: RCSSProperties['paddingBottom'];
  }) => ({ marginTop: my.mt, marginBottom: my.mb }),

  //padding
  p: (m: RCSSProperties['padding']) => ({ padding: m }),
  pt: (m: RCSSProperties['paddingTop']) => ({ paddingTop: m }),
  pr: (m: RCSSProperties['paddingRight']) => ({ paddingRight: m }),
  pb: (m: RCSSProperties['paddingBottom']) => ({ paddingBottom: m }),
  pl: (m: RCSSProperties['paddingLeft']) => ({ paddingLeft: m }),
  px: (px: {
    pl: RCSSProperties['paddingLeft'];
    pr: RCSSProperties['paddingRight'];
  }) => ({ paddingLeft: px.pl, paddingRight: px.pr }),
  py: (py: {
    pt: RCSSProperties['paddingTop'];
    pb: RCSSProperties['paddingBottom'];
  }) => ({ paddingTop: py.pt, paddingBottom: py.pb }),

  //others shortcuts
  bg: (bg: RCSSProperties['background']) => ({ background: bg }),

  round: () => ({ borderRadius: 10000000 }),
};