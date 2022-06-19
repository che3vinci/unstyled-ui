export const push = <T>(arr: T[], count: number, value: T): T[] => {
  const res = [...arr];
  for (let i = 0; i < count; i++) {
    res.push(value);
  }
  return res;
};
