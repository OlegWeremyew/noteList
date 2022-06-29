import { initialThemeState, themeActions } from 'reduxStore/themeReducer';
import { InferActionTypes } from 'reduxStore/types';

export type ActionThemeTypes = InferActionTypes<typeof themeActions>;
export type MainThemeType = 'dark' | 'light' | 'heavenly';
export type initStateThemeType = typeof initialThemeState;
