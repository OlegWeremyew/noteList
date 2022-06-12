import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import { StyledButton } from '../../../../layouts';
import { nodeListAction } from '../../../../reduxStore/nodeListReducer/nodeListAction/nodeListAction';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { FormContainer, InnerFormContainer, Input } from './components';

export const InnerForm = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  const adNewNodeList = (): void => {
    if (title.trim()) {
      dispatch(nodeListAction.addNewNodeList(title));
      setTitle('');
      setError('');
    } else {
      setTitle('');
      setError('required');
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
          placeholder="Enter node title"
          onChange={e => setNodeListTitle(e)}
          value={title}
        />
        <StyledButton type="button" onClick={adNewNodeList}>
          Add list
        </StyledButton>
      </FormContainer>
      {error}
    </InnerFormContainer>
  );
};
