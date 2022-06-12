import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { nodeListAction } from '../../../../reduxStore/nodeListReducer/nodeListAction/nodeListAction';
import { getReadOnlyValue } from '../../../../selectors';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import {
  DeleteNodeButton,
  HelpfulBlock,
  NodeDescription,
  NodeItem,
  NodeItemBlock,
  NodeListContainer,
  NodeTitle,
} from './components';
import NodeForm from './NodeForm/NodeForm';
import { NodeListPropsType } from './types';

export const NodeList: FC<NodeListPropsType> = ({
  node,
  nodeListID,
}): ReturnComponentType => {
  const dispatch = useDispatch();

  const readonly = useSelector(getReadOnlyValue);

  const removeNode = (nodeID: string): void => {
    dispatch(nodeListAction.removeNodeFromList(nodeListID, nodeID));
  };

  const changeNodeStatusInList = (nodeID: string, status: boolean): void => {
    dispatch(nodeListAction.changeNodeStatusInList(nodeListID, nodeID, status));
  };

  return (
    <NodeListContainer>
      <NodeForm nodeListID={nodeListID} />
      <NodeItemBlock>
        {node.map((item, index) => (
          <NodeItem key={item.id}>
            <NodeTitle>
              {index + 1}. {item.title}
            </NodeTitle>
            <HelpfulBlock>
              <label htmlFor={item.id}>Was it helpful?</label>
              <input
                id={item.id}
                type="checkbox"
                checked={item.isCompleted}
                onChange={e => changeNodeStatusInList(item.id, e.currentTarget.checked)}
                disabled={readonly}
              />
            </HelpfulBlock>
            <NodeDescription>Description: {item.description}</NodeDescription>
            <DeleteNodeButton
              disabled={readonly}
              type="button"
              onClick={() => removeNode(item.id)}
            >
              Delete node
            </DeleteNodeButton>
          </NodeItem>
        ))}
      </NodeItemBlock>
    </NodeListContainer>
  );
};
