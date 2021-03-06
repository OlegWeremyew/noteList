import React, { ChangeEvent, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Container } from './components';
import { SwitchSelect } from './SwitchSelect';
import { DefaultSelectType } from './types';

import { SettingsTitle } from 'layouts';
import { themeActions } from 'reduxStore';
import { MainThemeType } from 'reduxStore/themeReducer/types';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const SwitchTheme: React.FC<DefaultSelectType> = ({
  onChange,
}): ReturnComponentType => {
  const dispatch = useDispatch();

  const changeSelectValue = useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
    onChange && onChange(e);
    dispatch(themeActions.changeTheme(e.currentTarget.value as MainThemeType));
  }, []);

  return (
    <Container>
      <SettingsTitle>Color them:</SettingsTitle>
      <SwitchSelect changeSelectValue={changeSelectValue} />
    </Container>
  );
};
