import Cookies, { CookieAttributes } from 'js-cookie';
import { useCallback } from 'react';

export const useCookie = () => {
  const get = useCallback((name: string) => Cookies.get(name), []);
  const set = useCallback(
    (name: string, value: string, options?: CookieAttributes) =>
      Cookies.set(name, value, options),
    []
  );
  return {
    get,
    set,
  };
};
