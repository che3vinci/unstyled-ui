import {
  DateType,
  FormattedTime,
  getLeftTime,
  LEFT_ZERO_TIME,
} from '@c3/utils';
import { useEffect, useRef, useState } from 'react';

export const useLeftTime = (target: DateType, interval = 1000) => {
  const [leftTime, setLeftTime] = useState<FormattedTime>(LEFT_ZERO_TIME);
  const ref = useRef<number>();
  useEffect(() => {
    if (ref.current) {
      clearInterval(ref.current);
    }
    ref.current = window.setInterval(() => {
      setLeftTime(getLeftTime(target));
    }, interval);
  }, [interval, target]);
  return leftTime;
};
