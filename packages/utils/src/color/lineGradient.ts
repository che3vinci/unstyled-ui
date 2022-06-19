import { Color, PercentString } from '../lang/famous';

export type GradientStop = {
  offset: number | PercentString;
  stopColor: Color;
  stopOpacity?: number; //0-1
};
export type LinearGradient = GradientStop[];
