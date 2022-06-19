//s.split() has problem with some characters which are out of utf16
export const reverse = (s: string) => Array.from(s).reverse().join('');
