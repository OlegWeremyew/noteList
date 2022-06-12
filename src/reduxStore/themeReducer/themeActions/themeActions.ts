import * as themeConstants from '../constants';
import { MainThemeType } from '../types';

export const themeActions = {
  changeTheme(theme: MainThemeType) {
    return {
      type: themeConstants.CHANGE_THEME,
      payload: {
        theme,
      },
    } as const;
  },
  setReadOnlyStatus(readonly: boolean) {
    return {
      type: themeConstants.SET_READ_ONLY_STATUS,
      payload: {
        readonly,
      },
    } as const;
  },
};
