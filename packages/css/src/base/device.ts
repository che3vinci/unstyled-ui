const isDevice = (device: string) => {
  if (!window.matchMedia) {
    throw new Error('not browser enviroment in isDevice()');
  }
  const { matches } = window.matchMedia(device);
  return matches;
};

export const isMobile = isDevice('(max-width:768px)');
