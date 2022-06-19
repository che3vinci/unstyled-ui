export const maxMobileWidth = 768;
export const minWideScreenWidth = 1366;

//design reference width
export const mobileDesignWidth = 750;
export const desktopDesignWidth = 1366;

export const baseTheme = {
  mobile: `@media screen and (max-width:${maxMobileWidth}px)`,
  breakpoints: [maxMobileWidth, minWideScreenWidth],
};

// export type Theme = typeof baseTheme & typeof darkTheme;
