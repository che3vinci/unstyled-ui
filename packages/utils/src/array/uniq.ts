export const isUniq = <T>(arr: T[]) =>
  arr.every((e: T, index: number) => arr.indexOf(e) === index);
export const uniq = <T>(arr: T[]) => Array.from(new Set(arr));
