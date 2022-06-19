export const FixedPxReg = /^_-?\d+\.?\d*/; //包括小数

export const colorProperties = [
  'color',
  'backgroundColor',
  'bgc',
  'background',
];

export const notLengthProp = [
  'flexGrow',
  'zIndex',
  'fontWeight',
  'opacity',
  'flexShrink',
  'aspectRatio',
  'lineHeight',
]; //line-height has two cases

export const LINE_HEIGHT_IS_RATIO_THRESHOLD = 5;
