import { useEffect } from 'react';
import { useLatest } from './useLatest';

//TODO: write unit case to test closure problem(,NOT using `useLatest`)
export const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);
  useEffect(
    () => () => {
      fnRef.current();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};
