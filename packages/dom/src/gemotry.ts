import { dbg } from '@c3/utils';
import { isDocument, isWindow } from './isWindow';

//
export const getScrollBarWidth = () =>
  window.innerWidth - document.documentElement.offsetWidth;

export function getOuterWidth(el: HTMLElement) {
  if (el === document.body) {
    return document.documentElement.clientWidth;
  }
  return el.offsetWidth;
}

export function getOuterHeight(el: HTMLElement) {
  if (el === document.body) {
    return window.innerHeight || document.documentElement.clientHeight;
  }
  return el.offsetHeight;
}

//including invisible part(overflow)
export function getDocSize() {
  const widthWithoutSrollBar = Math.max(
    document.documentElement.scrollWidth,
    document.body.scrollWidth
  );
  const heightWithoutScrollBar = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );

  return {
    width: widthWithoutSrollBar,
    height: heightWithoutScrollBar,
  };
}

// including scrollbar
export function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function getScroll() {
  return {
    scrollLeft: Math.max(
      document.documentElement.scrollLeft,
      document.body.scrollLeft
    ),
    scrollTop: Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    ),
  };
}

export function getScrollTop(el: HTMLElement | Window | Document) {
  if (isWindow(el)) {
    return el.screenY || el.pageYOffset;
  }
  if (isDocument(el)) {
    return el.documentElement.scrollTop;
  }
  return el.scrollTop;
}

//TODO:test
export function getBoxInPage(node: HTMLElement) {
  const box = node.getBoundingClientRect();
  return {
    left: box.left + window.pageXOffset,
    top: box.top + window.pageYOffset,
    width: box.width,
    height: box.height,
  };
}

export const getBoxInViewPort = (node: HTMLElement) => {
  return node.getBoundingClientRect();
};

export const getSize = (node: HTMLElement) => {
  const res = node.getBoundingClientRect();
  return {
    width: res.width,
    height: res.height,
  };
};

export const isTouchBottom = (el: HTMLElement): boolean => {
  dbg(
    // eslint-disable-next-line max-len
    `el.scrollHeight(${el.scrollHeight}) - el.scrollTop${el.scrollTop} - el.offsetHeight=${el.offsetHeight}`,
    el.scrollHeight - el.scrollTop - el.offsetHeight
  );

  //I found `el.scrollHeight`,`el.scrollTop` `el.offsetHeight` will ignore the fraction part of the number
  // i use 2 (not zero) to judge
  return el.scrollHeight - el.scrollTop - el.offsetHeight <= 2;
};

//TODO:
export const isRight = () => {
  // clientHeight = style.Height + padding;
  //offsetHeight = style.height + padding+border;
  return true;
};
