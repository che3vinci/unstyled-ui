export const removeNode = (ele: HTMLElement): void => {
  if (!ele.parentNode) {
    throw new Error('error');
  }
  ele.parentNode.removeChild(ele);
};

export const removeChildren = (parent: HTMLElement) => {
  for (const e of Array.from(parent.childNodes)) {
    parent.removeChild(e);
  }
};

export const appendToBody = (className: string) => {
  // const child = document.body.querySelector(className);
  // if (child) {
  //   document.body.removeChild(child);
  // }
  const div = document.createElement('div');
  div.className = className;
  document.body.appendChild(div);
  return div;
};
export const getNewAppendedNode = (className: string) => {
  return appendToBody(className);
};
