export const stripUnit = (x: string) => {
  return x.replace(/px|vw|cm/, '');
};
