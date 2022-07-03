export const bp2media = bps => {
  if (bps.length === 0) {
    return {};
  }
  const res = {
    m1: ` (max-width: ${bps[0]-1}px)`,
  };
  bps
    .map((bp, i) => ` (min-width: ${bp}px)`)
    .forEach((media, i) => {
      res[`m${i + 2}`] = media;
    });

  return res;
};
