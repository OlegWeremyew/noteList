import React, { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Input, NodeTitleContainer } from './components';
import { NodeTitlePropsType } from './types';

import { nodeListAction } from 'reduxStore';
import { getReadOnlyValue } from 'selectors';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const NodeTitle: FC<NodeTitlePropsType> = ({
  index,
  title,
  itemID,
  nodeListID,
}): ReturnComponentType => {
  const dispatch = useDispatch();
  const readonly = useSelector(getReadOnlyValue);
  const [status, setStatus] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(title);

  const changeNodeListItemTitle = (e: string): void => {
    if (e.trim()) {
      setNewTitle(e);
      dispatch(nodeListAction.changeNodeListItemTitle(nodeListID, itemID, newTitle));
    }
  };

  return (
    <>
      {status && !readonly ? (
        <Input
          type="text"
          value={newTitle}
          placeholder="enter new list title"
          onChange={e => changeNodeListItemTitle(e.currentTarget.value)}
          onBlur={() => setStatus(false)}
          autoFocus
        />
      ) : (
        <NodeTitleContainer onDoubleClick={() => setStatus(true)}>
          {index}. {title}
        </NodeTitleContainer>
      )}
    </>
  );
};
