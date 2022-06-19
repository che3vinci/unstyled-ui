//immutable version.

export const remove = <T>(arr: readonly T[], ele: T): T[] => {
  const res = [...arr];
  const idx = res.findIndex(e => e === ele);
  if (idx !== -1) {
    res.splice(idx, 1);
  }
  return res;
};
