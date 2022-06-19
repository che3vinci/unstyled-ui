import { useCallback, useEffect, useRef, useState } from 'react';
import { useSwitch } from '.';

export const useCountDown = (
  count: number, // in second
  interval = 1000
) => {
  const [started, on, off] = useSwitch(false);
  const [countLeft, setCountLeft] = useState(count);
  const timeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) {
      return;
    }

    if (!timeRef.current) {
      timeRef.current = window.setInterval(() => {
        setCountLeft(left => left - 1);
      }, interval);
    }

    if (countLeft === 0) {
      timeRef.current && clearInterval(timeRef.current);
      timeRef.current = null;
      off();
    }
  }, [interval, countLeft, started, setCountLeft, off]);

  const start = useCallback(() => {
    setCountLeft(count);
    on();
  }, [on, count, setCountLeft]);
  const finish = useCallback(() => {
    off();
  }, [off]);

  return [countLeft, started, start, finish] as const;
};
