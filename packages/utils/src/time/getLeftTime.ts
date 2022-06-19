import dayjs from 'dayjs';
import { DateType, FormattedTime, Second } from '.';
import { parseMs } from './parseMs';

export const LEFT_ZERO_TIME: FormattedTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
};

export const getLeftTime = (target: DateType): FormattedTime => {
  const differenceInMs = +dayjs(target) - +new Date();
  if (differenceInMs > 0) {
    return parseMs(differenceInMs);
  }
  return LEFT_ZERO_TIME;
};

export const getLeftTimeInSecond = (target: DateType): Second => {
  return dayjs(target).unix() - Math.floor(+new Date() / 1000);
};
