import React, { memo } from 'react';

import { StyledButton } from './components';
import { MyButtonType } from './types';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const MyButton: React.FC<MyButtonType> = memo(
  ({ children, callback }): ReturnComponentType => (
    <StyledButton onClick={callback} type="button">
      {children}
    </StyledButton>
  ),
);
