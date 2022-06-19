export const ready = (cb: EventListener): void => {
  document.addEventListener('DOMContentLoaded', cb);
};
