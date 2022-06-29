import React, { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { NodeDescriptionContainer, Textarea } from './component';
import { NodeDescriptionPropsType } from './types';

import { nodeListAction } from 'reduxStore';
import { getReadOnlyValue } from 'selectors';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const NodeDescription: FC<NodeDescriptionPropsType> = ({
  description,
  nodeListID,
  itemID,
}): ReturnComponentType => {
  const dispatch = useDispatch();
  const readonly = useSelector(getReadOnlyValue);
  const [status, setStatus] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState<string>(description);

  const changeNodeListItemDescription = (e: string): void => {
    if (e.trim()) {
      setNewDescription(e);
      dispatch(
        nodeListAction.changeNodeListItemDescription(nodeListID, itemID, newDescription),
      );
    }
  };

  return (
    <>
      {status && !readonly ? (
        <Textarea
          value={newDescription}
          placeholder="enter new description"
          onChange={e => changeNodeListItemDescription(e.currentTarget.value)}
          onBlur={() => setStatus(false)}
          autoFocus
        />
      ) : (
        <NodeDescriptionContainer onDoubleClick={() => setStatus(true)}>
          Description: {newDescription}
        </NodeDescriptionContainer>
      )}
    </>
  );
};
