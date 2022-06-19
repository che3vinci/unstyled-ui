import { s } from '../string';

export const divide = (
  a: number | string,
  b: number | string,
  precision = 4
): number => +(parseFloat(s(a)) / parseFloat(s(b))).toFixed(precision);

export const percent = (
  molecule: number,
  denominator: number,
  precision = 4
): string => `${divide(molecule, denominator, precision) * 100}%`;

export const subtract = (
  a: number | string,
  b: number | string,
  precision = 2
): number => +(parseFloat(s(a)) - parseFloat(s(b))).toFixed(precision);

export const add = (
  a: number | string,
  b: number | string,
  precision = 2
): number => +(parseFloat(s(a)) + parseFloat(s(b))).toFixed(precision);

export const multiply = (
  a: number | string,
  b: number | string,
  precision = 2
): number => +(parseFloat(s(a)) * parseFloat(s(b))).toFixed(precision);

export const toPercent = (x: number, precision = 2) =>
  `${(x * 100).toFixed(precision)}%`;
