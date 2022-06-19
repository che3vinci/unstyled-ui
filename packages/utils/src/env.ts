export const ua = typeof navigator === 'undefined' ? '' : navigator.userAgent;

export const env = {
  browser: typeof window !== 'undefined',
  ios: /iPad|iPhone|iPod/i.test(ua),
  tablet: /tablet/i.test(ua) && !/tablet pc/i.test(ua),
  windowsphone: /windows phone/i.test(ua),
  get mobile() {
    return !this.tablet && /[^-]mobi/i.test(ua);
  },
  get windows() {
    return !this.windowsphone && /windows/i.test(ua);
  },
};

//do something
