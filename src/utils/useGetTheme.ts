import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { themeDark, themeHeavenly, themeLight } from '../constants';
import { themeActions } from '../reduxStore';
import { getThemeValue } from '../selectors';
import { ThemeObjectType } from '../types/themeType';

export const useGetTheme = (): ThemeObjectType => {
  const dispatch = useDispatch();

  const themeValue = useSelector(getThemeValue);
  let themeStyle: any;

  useEffect(() => {
    const themeValueAsString = localStorage.getItem('themeValue');
    themeValueAsString &&
      dispatch(themeActions.changeTheme(JSON.parse(themeValueAsString)));
  }, []);

  useEffect(() => {
    localStorage.setItem('themeValue', JSON.stringify(themeValue));
  }, [themeValue]);

  if (themeValue === 'light') themeStyle = themeLight;
  if (themeValue === 'dark') themeStyle = themeDark;
  if (themeValue === 'heavenly') themeStyle = themeHeavenly;
  return themeStyle;
};
