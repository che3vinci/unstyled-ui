import type { Dayjs } from 'dayjs';
export type FormattedTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};
export type Second = number;
export type MiliSecond = number;
export type DateType = Dayjs | Date | MiliSecond | string | undefined;
export const readableTimeFormat = 'MMM/DD/YYYY';
