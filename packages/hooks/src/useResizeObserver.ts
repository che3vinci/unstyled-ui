import { useEffect } from 'react';
export const useResizeObserver = (
  el: Element | null,
  cb: (e: ResizeObserverEntry) => void,
  options: ResizeObserverOptions = { box: 'border-box' }
) => {
  useEffect(() => {
    if (!el) {
      return;
    }
    const observer = new ResizeObserver(entries => {
      cb(entries[0]);
    });
    observer.observe(el, options);
    return () => observer.unobserve(el);
  }, [cb, el, options]);
};
