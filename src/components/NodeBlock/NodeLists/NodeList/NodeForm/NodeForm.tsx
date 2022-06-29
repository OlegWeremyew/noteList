import React, { ChangeEvent, FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Input, Label, NodeButton, NodeFormContainer, Textarea } from './components';
import { NodeFormType } from './types';

import { EMPTY_STRING } from 'constants/variables';
import { nodeListAction } from 'reduxStore';
import { getReadOnlyValue } from 'selectors';
import { ReturnComponentType } from 'types/ReturnComponentType';

const NodeForm: FC<NodeFormType> = ({ nodeListID }): ReturnComponentType => {
  const dispatch = useDispatch();
  const readonly = useSelector(getReadOnlyValue);
  const [nodeTitle, setNodeTitle] = useState<string>(EMPTY_STRING);
  const [nodeDescription, setNodeDescription] = useState<string>(EMPTY_STRING);

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
    }
  };

  return (
    <NodeFormContainer>
      <Label htmlFor="NodeTitle">Node title:</Label>
      <Input
        id="NodeTitle"
        type="text"
        placeholder="Node title"
        onChange={e => setNewNodeTitle(e)}
        value={nodeTitle}
        required
        disabled={readonly}
      />
      <Label htmlFor="NodeDescription">Node description:</Label>
      <Textarea
        placeholder="Node description"
        onChange={e => setNewNodeDescription(e)}
        value={nodeDescription}
        required
        disabled={readonly}
      />
      <NodeButton type="button" onClick={addNewNodeInList} disabled={readonly}>
        Add node
      </NodeButton>
    </NodeFormContainer>
  );
};

export default NodeForm;
