import { AppRootStateType } from '../../reduxStore/store';
import { MainThemeType } from '../../reduxStore/themeReducer/types';

export const getThemeValue = (state: AppRootStateType): MainThemeType =>
  state.theme.theme;
