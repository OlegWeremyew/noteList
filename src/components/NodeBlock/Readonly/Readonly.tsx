import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { themeActions } from '../../../reduxStore';
import { getReadOnlyValue } from '../../../selectors';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { ReadonlyContainer } from './components';

export const Readonly = (): ReturnComponentType => {
  const readonly = useSelector(getReadOnlyValue);
  const dispatch = useDispatch();

  const setReadonlyMode = (): void => {
    dispatch(themeActions.setReadOnlyStatus(!readonly));
  };
  return (
    <ReadonlyContainer>
      Readonly mode:
      <input onChange={setReadonlyMode} type="checkbox" checked={readonly} />
    </ReadonlyContainer>
  );
};
