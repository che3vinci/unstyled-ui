import { useCallback, useRef, useState } from 'react';
import { useSwitch } from './useSwitch';

export type FetchFn<P> = (...args: any[]) => Promise<P>;

export const useFetch = <T>(
  fetch: FetchFn<T>,
  initialValue: T,
  option?: { msg?: string; debounce?: number; cache?: boolean }
) => {
  const [data, setData] = useState(initialValue);
  const [msg, setMsg] = useState(option?.msg || 'ok');
  const [loading, on, off] = useSwitch(false);
  const cancelRef = useRef(false);
  const wFetch = useCallback(
    async (...args: unknown[]) => {
      try {
        on();
        cancelRef.current = false;
        const res = await fetch(...args);
        if (cancelRef.current) {
          return initialValue;
        }
        if (!res) {
          setData(initialValue);
          return initialValue;
        }
        setData(res);
        off();
        return res;
      } catch (e) {
        setMsg((e as Error).message || 'network error');
        off();
        throw e;
      }
    },
    [fetch, initialValue, off, on]
  );
  const cancel = useCallback(() => {
    cancelRef.current = true;
  }, []);

  return [data, wFetch, setData, cancel, loading] as const;
};
