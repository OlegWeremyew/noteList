import { MainThemeType } from '../../reduxStore/themeReducer/types';
import { AppRootStateType } from '../../reduxStore/types';

export const getThemeValue = (state: AppRootStateType): MainThemeType =>
  state.theme.theme;

export const getReadOnlyValue = (state: AppRootStateType): boolean =>
  state.theme.readonly;
