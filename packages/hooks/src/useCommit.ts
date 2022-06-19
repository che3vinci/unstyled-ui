import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useCommit = <T = unknown>() => {
  const dispatch = useDispatch();
  const commit = useCallback(
    (type: string, payload: T) => {
      dispatch({ type, payload });
    },
    [dispatch]
  );
  return commit;
};
