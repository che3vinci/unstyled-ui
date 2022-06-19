import { useEffect } from 'react';

export const useIntersectionObserver = (
  el: Element | null,
  callback: (entry: IntersectionObserverEntry) => void,
  option?: IntersectionObserverInit
) => {
  useEffect(() => {
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(entries => {
      console.log('IntersectionObserver', entries);
      if (entries[0].intersectionRatio <= 0) return;
      callback(entries[0]);
    }, option);
    observer.observe(el);
    return () => observer.disconnect();
  }, [callback, el, option]);
};
