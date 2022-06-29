import React, { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { InnerNodeContainer } from '../NodeList/components';

import { Input, ListTitle } from './components';
import { InnerNodeType } from './types';

import { StyledButton } from 'layouts';
import { nodeListAction } from 'reduxStore';
import { getReadOnlyValue } from 'selectors';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const InnerNode: FC<InnerNodeType> = ({
  removeNodeList,
  nodeList,
}): ReturnComponentType => {
  const dispatch = useDispatch();
  const readonly = useSelector(getReadOnlyValue);
  const [status, setStatus] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(nodeList.title);

  const changeNodeListTitle = (e: string): void => {
    if (e.trim()) {
      setNewTitle(e);
      dispatch(nodeListAction.changeNodeListTitle(nodeList.id, newTitle));
    }
  };

  return (
    <InnerNodeContainer>
      {status && !readonly ? (
        <Input
          type="text"
          value={newTitle}
          placeholder="enter new list title"
          onChange={e => changeNodeListTitle(e.currentTarget.value)}
          onBlur={() => setStatus(false)}
          autoFocus
        />
      ) : (
        <>
          <ListTitle onDoubleClick={() => setStatus(true)}>{newTitle}</ListTitle>
          <StyledButton
            type="button"
            onClick={() => removeNodeList(nodeList.id)}
            disabled={readonly}
          >
            Del
          </StyledButton>
        </>
      )}
    </InnerNodeContainer>
  );
};
