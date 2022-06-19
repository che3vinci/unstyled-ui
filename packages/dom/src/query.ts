export const queryAll = (selector: string) =>
  document.querySelectorAll(selector);

export const query = <T extends HTMLElement = HTMLElement>(
  selector: string
): T | null => {
  if (selector.startsWith('#')) {
    return document.getElementById(selector.replace('#', '')) as T;
  }
  return document.querySelector<T>(selector);
};
