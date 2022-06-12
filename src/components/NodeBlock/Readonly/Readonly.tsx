import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { themeActions } from '../../../reduxStore';
import { getReadOnlyValue } from '../../../selectors';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { ReadonlyContainer } from './components';

export const Readonly = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const readonly = useSelector(getReadOnlyValue);

  const setReadonlyMode = (): void => {
    dispatch(themeActions.setReadOnlyStatus(!readonly));
  };
  return (
    <ReadonlyContainer>
      <label htmlFor="readonlyMode">Readonly mode:</label>
      <input
        id="readonlyMode"
        onChange={setReadonlyMode}
        type="checkbox"
        checked={readonly}
      />
    </ReadonlyContainer>
  );
};
