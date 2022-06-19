import { useCallback } from 'react';
import { useFetch } from './useFetch';

export const useBlurSubmit = (
  api: (...args: unknown[]) => Promise<unknown>
) => {
  const [, fetch] = useFetch(api, {});

  const onBlur = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      const value: string = (e.target as HTMLInputElement).value;
      fetch(value);
    },
    [fetch]
  );
  return onBlur;
};
