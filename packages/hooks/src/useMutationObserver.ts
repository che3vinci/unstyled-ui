import { useEffect } from 'react';

export const useMutationObserver = (
  target: Element | undefined,
  cb: MutationCallback,
  options: MutationObserverInit
) => {
  useEffect(() => {
    if (!target) {
      return;
    }
    const o = new MutationObserver(cb);
    o.observe(target, options);
    return () => o.disconnect();
  }, [cb, options, target]);
};
