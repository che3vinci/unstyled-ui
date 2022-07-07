const isDevice = (device: string) => {
  if (!globalThis.matchMedia) {
    throw new Error('not browser enviroment in isDevice()');
  }
  const { matches } = globalThis.matchMedia(device);
  return matches;
};

export const isMobile = isDevice('(max-width:768px)');
