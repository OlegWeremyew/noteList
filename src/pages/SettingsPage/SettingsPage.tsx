import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';
import { SettingsContainer } from "../../layouts";
import { Settings } from "../../components/Settings";

const SettingsPage = (): ReturnComponentType => {
   const dispatch = useDispatch();

  const isShowControlPanel = useSelector(getIsShowControlPanel);

  const setHistoryBlockVisibility = useCallback((): void => {
    dispatch(calculatorAction.setControlPanelVisibility(!isShowControlPanel));
  }, [dispatch, isShowControlPanel]);

  const resetAllSettings = useCallback((): void => {
    dispatch(calculatorAction.setControlPanelVisibility(true));
    dispatch(themeActions.changeTheme('dark'));
  }, [dispatch]);

  const textSwitchValue = isShowControlPanel ? 'hide' : 'show';

  return (
    <SettingsContainer>
      <Settings
        textSwitchValue={textSwitchValue}
        setHistoryBlockVisibility={setHistoryBlockVisibility}
        resetAllSettings={resetAllSettings}
      />
    </SettingsContainer>
  );
};

export default SettingsPage;
