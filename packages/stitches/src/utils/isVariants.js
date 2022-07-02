export const isVairants = (key, composers) => {
  for (let composer of composers) {
    if (composer.variants && key in composer.variants) {
      return true;
      //TODO: default variants/compand variants
    }
  }
  return false;
};
