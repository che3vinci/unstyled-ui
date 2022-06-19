import { useEffect } from 'react';
export type AsynFn = (...args: unknown[]) => Promise<unknown>;

export const useAsyncEffect = (
  fn: AsynFn,
  dependencies: ReadonlyArray<unknown>
) => {
  useEffect(() => {
    fn();
  }, dependencies);
};
