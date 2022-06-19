import { ShortCutProperitesType } from './type';
export const shortCutMap: ShortCutProperitesType = {
  //width/height
  w: 'width',
  h: 'height',
  minW: 'minWidth',
  minH: 'minHeight',
  maxW: 'maxWidth',
  maxH: 'maxHeight',

  //margin
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  //padding
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],

  //flex

  //others
  br: 'borderRadius',
  bg: 'background',
  bgc: 'backgroundColor',
  hl: 'lineHeight',
};
