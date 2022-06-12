import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { nodeListAction } from '../../../../reduxStore/nodeListReducer/nodeListAction/nodeListAction';
import { getReadOnlyValue } from '../../../../selectors';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { FormContainer, InnerButton, InnerFormContainer, Input } from './components';

export const InnerForm = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const readonly = useSelector(getReadOnlyValue);
  const [title, setTitle] = useState<string>('');

  const adNewNodeList = (): void => {
    if (title.trim() && title.length < 50) {
      dispatch(nodeListAction.addNewNodeList(title));
      setTitle('');
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
