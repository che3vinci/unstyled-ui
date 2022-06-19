export const closeEnough = (a: number, b: number, threshold = 1e-6) => {
  return Math.abs(b - a) < threshold;
};
