import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FormContainer, InnerButton, InnerFormContainer, Input } from './components';

import { EMPTY_STRING } from 'constants/variables';
import { nodeListAction } from 'reduxStore';
import { getReadOnlyValue } from 'selectors';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const InnerForm = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const readonly = useSelector(getReadOnlyValue);
  const [title, setTitle] = useState<string>('');

  const adNewNodeList = (): void => {
    if (title.trim() && title.length < 50) {
      dispatch(nodeListAction.addNewNodeList(title));
      setTitle(EMPTY_STRING);
    }
  };

  const setNodeListTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  return (
    <InnerFormContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Enter node list title"
          onChange={e => setNodeListTitle(e)}
          value={title}
          required
          disabled={readonly}
        />
        <InnerButton type="button" onClick={adNewNodeList} disabled={readonly}>
          Add list
        </InnerButton>
      </FormContainer>
    </InnerFormContainer>
  );
};
