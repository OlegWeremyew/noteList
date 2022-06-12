import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { themeActions } from '../reduxStore';
import { getReadOnlyValue } from '../selectors';

export const useGetReadonly = (): boolean => {
  const dispatch = useDispatch();

  const readonlyValue = useSelector(getReadOnlyValue);

  useEffect(() => {
    const readonlyValueAsString = localStorage.getItem('readonlyValue');
    readonlyValueAsString &&
      dispatch(themeActions.setReadOnlyStatus(JSON.parse(readonlyValueAsString)));
  }, []);

  useEffect(() => {
    localStorage.setItem('readonlyValue', JSON.stringify(readonlyValue));
  }, [readonlyValue]);

  return readonlyValue;
};
