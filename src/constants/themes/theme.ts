import { DefaultTheme } from 'styled-components';

import { colors } from 'constants/colors';

export const themeLight: DefaultTheme = {
  background: colors.white,
  color: colors.black,
  buttonsBgc: colors.darkWhite,
  hoverBgc: colors.hoverWhite,
  border: colors.black,
  displayBgc: colors.darkWhite,
  error: colors.error,
  input: colors.LightInput,
};

export const themeDark: DefaultTheme = {
  background: colors.black,
  color: colors.white,
  buttonsBgc: colors.lightBlack,
  hoverBgc: colors.hoverBlack,
  border: colors.hoverWhite,
  displayBgc: colors.lightBlack,
  error: colors.error,
  input: colors.blackInput,
};

export const themeHeavenly: DefaultTheme = {
  background: colors.heavenly,
  color: colors.lightBlack,
  buttonsBgc: colors.heavenlyBlack,
  hoverBgc: colors.hoverHeavenly,
  border: colors.lightBlack,
  displayBgc: colors.heavenlyBlack,
  error: colors.error,
  input: colors.BlueInput,
};
