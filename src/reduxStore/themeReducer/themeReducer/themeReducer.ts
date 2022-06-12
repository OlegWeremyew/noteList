import * as themeConstants from '../constants';
import { ActionThemeTypes, initStateThemeType, MainThemeType } from '../types';

export const initialThemeState = {
  theme: 'dark' as MainThemeType,
  readonly: false,
};

export const themeReducer = (
  state: initStateThemeType = initialThemeState,
  action: ActionThemeTypes,
): initStateThemeType => {
  switch (action.type) {
    case themeConstants.CHANGE_THEME: {
      return { ...state, theme: action.payload.theme };
    }
    case themeConstants.SET_READ_ONLY_STATUS: {
      return { ...state, readonly: action.payload.readonly };
    }
    default:
      return state;
  }
};
