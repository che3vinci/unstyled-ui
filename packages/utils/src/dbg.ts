/// <reference types="vite/client" />

import { isString } from './lang';
import { s } from './string';

const ls =
  typeof window === 'undefined' ? { getItem: () => false } : localStorage;

export const __MOCK__ = !!ls.getItem('mock');

//TODO:
export const __DEV__ = globalThis.location?.hostname === 'localhost';

export const logtype = s(ls.getItem('dbg')).split(',');

export const log = (...args: unknown[]) => {
  if (logtype.includes('log')) {
    console.log(...args);
  }
};

export const dbg = (...args: unknown[]) => {
  if (logtype.includes('dbg')) {
    console.log(...args);
  }
};

export const dev = (...args: unknown[]) => {
  if (__DEV__) {
    console.log(...args);
  }
};

export const colorConfig = {
  '@network': 'color:green;background:white',
  '@useDebug': 'color:red;background:white',
  '@crypto': 'color:blue;background:white',
};

export const normalTextStyle = 'color:black;background:white';

//colorful dbg
export const cdbg = (...args: any[]) => {
  return (keyword: keyof typeof colorConfig) => {
    const newArgs = [];
    for (const e of args) {
      if (isString(e) && e.includes(keyword)) {
        const newInfo = e.replace(keyword, `%c${keyword}/%c`);
        newArgs.push(newInfo, colorConfig[keyword], normalTextStyle);
      } else {
        newArgs.push(e);
      }
    }
    dbg(...newArgs);
  };
};
