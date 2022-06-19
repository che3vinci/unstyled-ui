import { remove } from '@c3/utils';
import { Typography } from '../utils';
import { ResponsiveCSSProperties } from './../responsive/type';

export const componentStatus = [
  'normal',
  'hover',
  '_disabled',
  'focus',
  'c3Active',
  'error',
] as const;

export type ComponentName = 'input' | 'button' | 'text' | 'link' | 'textarea';

export const componentStatusWithoutNormal = remove(
  componentStatus,
  'normal'
) as unknown as Exclude<ComponentStatus, 'normal'>[];

export type ComponentStatus = typeof componentStatus[number];

export type ThKind = 'normal' | 'weak' | 'dim' | ThFontSize;

export type NormalSatus = {
  normal: ResponsiveCSSProperties;
};
export type HoverStatus = {
  hover: ResponsiveCSSProperties;
};
export type DisabledStatus = {
  _disabled: ResponsiveCSSProperties;
};
export type FocusStatus = {
  focus: ResponsiveCSSProperties;
};
export type ErrorStatus = {
  error: ResponsiveCSSProperties;
};

export type ComKind = {
  [key in ThKind]?: ResponsiveCSSProperties;
};

export type ThButton = {
  status: NormalSatus & HoverStatus & DisabledStatus;
  kind?: ComKind;
};
export type ThLink = {
  status: NormalSatus & HoverStatus & DisabledStatus;
  kind?: ComKind;
};
export type ThInput = {
  status: NormalSatus &
    HoverStatus &
    DisabledStatus &
    FocusStatus &
    ErrorStatus;
  kind?: ComKind;
};
export type ThTextArea = {
  status: NormalSatus &
    HoverStatus &
    DisabledStatus &
    FocusStatus &
    ErrorStatus;
  kind?: ComKind;
};
export type ThText = {
  status: NormalSatus;
  typo?: Partial<Record<'title' | 'subTitle' | 'text' | 'subText', Typography>>;
  kind?: ComKind;
};

export const thFontSize = [
  'bigTitle',
  'xl',

  'title',
  'lg',

  'subTitle',
  'md',

  'text',
  'nm',

  'subText',
  'sm',
] as const;
export type ThFontSize = typeof thFontSize[number];

export const thColor = [
  'primary',
  'secondary',
  'complementary',
  'weak',
  'dim',
  'bgcolor',
  'error',
] as const;
export type ThColor = typeof thColor[number];

export const theFontWeight = [
  'light',
  'medium',
  'bold',
  'regular',
  'title',
  'subTitle',

  'text',
  'subText',
] as const;
export type ThFontWeight = typeof theFontWeight[number];

export type Theme = {
  // size:
  colors: Partial<Record<ThColor, string>>;
  fontSize: Record<ThFontSize, number>;
  fontWeight: Record<ThFontWeight, number>;
  lineHeights: Record<'normal', number>;
} & {
  breakpoints?: number[];
  mobile?: string;
  text?: ThText;
  button?: ThButton;
  input?: ThInput;
  link?: ThLink;
  textarea?: ThTextArea;
};

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface DefaultTheme extends Theme {}
