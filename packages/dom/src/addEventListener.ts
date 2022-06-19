export function addEventListener(
  target: HTMLElement | Document | Window,
  eventType: string,
  cb: EventListener,
  option?: boolean | AddEventListenerOptions
) {
  if (target.addEventListener) {
    target.addEventListener(eventType, cb, option);
  }
  return () => {
    if (target.removeEventListener) {
      target.removeEventListener(eventType, cb);
    }
  };
}
