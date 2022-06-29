import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Settings } from 'components';
import { SettingsContainer } from 'layouts';
import { themeActions } from 'reduxStore';
import { ReturnComponentType } from 'types/ReturnComponentType';

const SettingsPage = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const resetAllSettings = useCallback((): void => {
    dispatch(themeActions.changeTheme('dark'));
    dispatch(themeActions.setReadOnlyStatus(false));
  }, [dispatch]);

  return (
    <SettingsContainer>
      <Settings resetAllSettings={resetAllSettings} />
    </SettingsContainer>
  );
};

export default SettingsPage;
