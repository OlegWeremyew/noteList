import React, { FC, memo } from 'react';

import { Title } from './components';
import { SettingsButton } from './SettingsButton';
import { SwitchTheme } from './SwitchTheme';
import { SettingsPropsType } from './types';

import { SettingsContainer } from 'layouts';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Settings: FC<SettingsPropsType> = memo(
  ({ resetAllSettings }): ReturnComponentType => (
    <SettingsContainer>
      <Title>Settings</Title>
      <SettingsButton
        title="Reset all settings 🛠:"
        text="reset"
        callback={resetAllSettings}
      />
      <SwitchTheme />
    </SettingsContainer>
  ),
);

export default Settings;
