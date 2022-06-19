export const canIUseCss =
  globalThis?.CSS?.supports ??
  function o() {
    return false;
  };
