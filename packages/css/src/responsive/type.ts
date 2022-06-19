import React from 'react';
import { css } from 'styled-components';
import { ComponentStatus } from '../theme';
import { Typography } from '../utils';
import { supportedPseEles } from './selector/pse-ele-selector';
export type CSSRawInputValueType = string | number | boolean;

export type CSSProperties = React.CSSProperties;

export type ResponsiveInputValueType =
  | CSSRawInputValueType
  | CSSRawInputValueType[];

export type ResponsiveInputValueArrayType = CSSRawInputValueType[];

export type ResponsiveOutputValueType = string[];

export type cssValuesConvertRulesFn = (
  values: ResponsiveInputValueType
) => [string, string, string];

export type ResponsiveCSSProperties = {
  [key in keyof CSSProperties]: ResponsiveInputValueType;
};

export type ShortCutProperitesType = Record<
  | 'w'
  | 'h'
  | 'minW'
  | 'maxW'
  | 'minH'
  | 'maxH'
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'p'
  | 'pt'
  | 'pb'
  | 'pl'
  | 'pr'
  | 'px'
  | 'py'
  | 'br'
  | 'bg'
  | 'bgc'
  | 'hl',
  keyof CSSProperties | (keyof CSSProperties)[]
>;

export type ICssProps = ResponsiveCSSProperties & {
  dbg?: boolean;
  round?: ResponsiveInputValueType;
  ar?: ResponsiveInputValueType;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
} & {
  [key in keyof ShortCutProperitesType]?: ResponsiveInputValueType;
} & {
  [key in Exclude<ComponentStatus, 'normal'>]?: ResponsiveCSSProperties;
} & {
  css?: ReturnType<typeof css>;
} & {
  _typo?: Typography;
} & {
  [key in keyof typeof supportedPseEles]?: ResponsiveCSSProperties;
} & Partial<
    Record<`_cls_${string}` | `_id_${string}`, ResponsiveCSSProperties>
  >;
