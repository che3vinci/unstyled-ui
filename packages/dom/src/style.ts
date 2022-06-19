export const style = {
  get: <T extends HTMLElement = HTMLElement>(
    ele: T,
    key: keyof CSSStyleDeclaration
  ) => {
    return window.getComputedStyle(ele)[key];
  },
  set: <T extends HTMLElement = HTMLElement>(
    ele: T,
    key: string,
    value: CSSStyleDeclaration[number]
  ) => {
    ele.style.setProperty(key, value, 'important');
  },
};
