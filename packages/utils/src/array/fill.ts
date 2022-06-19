export const fill = (size: number, value: any) => {
  const a = Array(size);
  for (let i = 0; i <= a.length - 1; i++) {
    a[i] = value;
  }
  return a;
};
