import React from 'react';

import { useDispatch } from 'react-redux';

import { ReadonlyContainer } from './components';

import { themeActions } from 'reduxStore';
import { ReturnComponentType } from 'types/ReturnComponentType';
import { useGetReadonly } from 'utils';

export const Readonly = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const readonly = useGetReadonly();

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
