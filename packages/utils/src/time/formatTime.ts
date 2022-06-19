import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { DateType, readableTimeFormat } from './type';

dayjs.extend(utc);

export const formatTime = (
  time: DateType,
  fmt = readableTimeFormat,
  utcOffset = 0
) => {
  return dayjs(time).utcOffset(utcOffset).format(fmt);
};
