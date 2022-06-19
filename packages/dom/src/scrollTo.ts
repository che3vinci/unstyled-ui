import { easeInOutCubic } from './easings';
import { getScrollTop } from './gemotry';
import { isDocument, isWindow } from './isWindow';
import { raf } from './raf';

interface ScrollToOptions {
  /** Scroll container, default as window */
  getContainer?: () => HTMLElement | Window | Document;
  /** Scroll end callback */
  callback?: () => unknown;
  /** Animation duration, default as 450 */
  duration?: number;
}

export function scrollTo(y: number, options: ScrollToOptions = {}) {
  const { getContainer = () => window, callback, duration = 450 } = options;
  const container = getContainer();
  const scrollTop = getScrollTop(container);
  const startTime = Date.now();

  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nextScrollTop = easeInOutCubic(
      time > duration ? duration : time,
      scrollTop,
      y,
      duration
    );

    if (isWindow(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else if (isDocument(container)) {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }

    if (time < duration) {
      raf(frameFunc);
    } else if (typeof callback === 'function') {
      callback();
    }
  };
  raf(frameFunc);
}

export const scrollToTop = (el: HTMLElement) => {
  el.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' });
};
export const scrollToBottom = (el: HTMLElement) => {
  el.scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' });
};
