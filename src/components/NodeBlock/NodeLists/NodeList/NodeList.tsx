import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { nodeListAction } from '../../../../reduxStore/nodeListReducer/nodeListAction/nodeListAction';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { HelpfulBlock, NodeItem, NodeListContainer, NodeTitle } from './components';
import NodeForm from './NodeForm/NodeForm';
import { NodeListPropsType } from './types';

export const NodeList: FC<NodeListPropsType> = ({
  node,
  nodeListID,
}): ReturnComponentType => {
  const dispatch = useDispatch();

  const removeNode = (nodeID: string): void => {
    dispatch(nodeListAction.removeNodeFromList(nodeListID, nodeID));
  };

  const changeNodeStatusInList = (nodeID: string, status: boolean): void => {
    dispatch(nodeListAction.changeNodeStatusInList(nodeListID, nodeID, status));
  };

  return (
    <NodeListContainer>
      <NodeForm nodeListID={nodeListID} />
      <div>
        {node.map(item => (
          <NodeItem key={item.id}>
            <NodeTitle>{item.title}</NodeTitle>
            <hr />
            <HelpfulBlock>
              <label htmlFor={item.id}>Was it helpful?</label>
              <input
                id={item.id}
                type="checkbox"
                checked={item.isCompleted}
                onChange={e => changeNodeStatusInList(item.id, e.currentTarget.checked)}
              />
            </HelpfulBlock>
            <div>Node: {item.description}</div>
            <button type="button" onClick={() => removeNode(item.id)}>
              Delete node
            </button>
          </NodeItem>
        ))}
      </div>
    </NodeListContainer>
  );
};
