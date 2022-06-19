import { getBoxInPage } from '.';
import { query } from './query';

export const jump = (selector: string) => {
  const el = query(selector);
  el &&
    el.scrollIntoView({
      behavior: 'smooth',
    });
};

export const jumpWithOffset = (selector: string, offset: number) => {
  const el = query(selector);
  if (!el) {
    throw new Error(`not found the element:${selector}`);
  }
  const { top } = getBoxInPage(el);
  window.scrollTo({ top: top - offset, behavior: 'smooth' });
};
