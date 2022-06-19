export const REG_FIRST_CHAR = /^./;

//make the first character upper case
export const firstUpper = (s: string) =>
  s.replace(REG_FIRST_CHAR, m => m.toUpperCase());
