import { FormattedTime } from './type';

export const parseMs = (milliseconds: number): FormattedTime => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: milliseconds % 1000,
  };
};
