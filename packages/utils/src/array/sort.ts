// by alphabetic or by numberic.
// also:string.prototype.localeCompare() to compare string
export const sortByAsc = (a: number | string, b: number | string) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export const sortByDesc = (a: number | string, b: number | string) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
};
