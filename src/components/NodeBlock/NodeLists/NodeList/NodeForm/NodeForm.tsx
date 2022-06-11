import React, { ChangeEvent, FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import { nodeListAction } from '../../../../../reduxStore/nodeListReducer/nodeListAction/nodeListAction';
import { ReturnComponentType } from '../../../../../types/ReturnComponentType';
import { NodeFormContainer } from '../components';

import { NodeFormType } from './types';

const NodeForm: FC<NodeFormType> = ({ nodeListID }): ReturnComponentType => {
  const dispatch = useDispatch();
  const [nodeTitle, setNodeTitle] = useState<string>('');
  const [nodeDescription, setNodeDescription] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNewNodeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setNodeTitle(e.currentTarget.value);
  };

  const setNewNodeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNodeDescription(e.currentTarget.value);
  };

  const addNewNodeInList = (): void => {
    if (nodeTitle.trim() && nodeDescription.trim()) {
      dispatch(nodeListAction.addNewNodeInList(nodeListID, nodeTitle, nodeDescription));
      setNodeTitle('');
      setNodeDescription('');
      setError('');
    } else {
      setError('required');
    }
  };

  return (
    <NodeFormContainer>
      <input
        type="text"
        placeholder="node title"
        onChange={e => setNewNodeTitle(e)}
        value={nodeTitle}
      />
      {error}
      <textarea
        placeholder="node description"
        onChange={e => setNewNodeDescription(e)}
        value={nodeDescription}
      />
      {error}
      <button type="button" onClick={addNewNodeInList}>
        add node
      </button>
    </NodeFormContainer>
  );
};

export default NodeForm;
