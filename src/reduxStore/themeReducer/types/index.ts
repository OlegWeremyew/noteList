import { InferActionTypes } from '../../types';
import { themeActions } from '../themeActions';
import { initialThemeState } from '../themeReducer';

export type ActionThemeTypes = InferActionTypes<typeof themeActions>;
export type MainThemeType = 'dark' | 'light' | 'heavenly';
export type initStateThemeType = typeof initialThemeState;
