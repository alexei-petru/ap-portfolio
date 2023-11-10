export const GITHUB_URL = "https://github.com/Allex191";

export const MAX_SECTION_SIZE = {
  height: 1080,
  width: 2440,
};

export const BREAKPOINTS_APP = {
  mobileSmall: "360px",
  mobileMedium: "480px",
  mobileLarge: "576px",
  tabletPortrait: "768px",
  tabletLandscape: "992px",
  laptopSmall: "1024px",
  laptopMedium: "1200px",
  laptopLarge: "1366px",
  desktopRegular: "1440px",
  desktopLarge: "1920px",
  desktopQHD: "2440px",
} as const;

export const APP_THEME = {
  colors: {
    primary: "black",
    secondary: "white",
    popoverDropDownBackgroundColor: "#020309",
  },
  breakpoints: BREAKPOINTS_APP,
} as const;

export const CARD_SIZE = { width: 320, height: 450 };


