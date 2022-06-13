import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { nodeListAction } from '../../../../reduxStore/nodeListReducer/nodeListAction/nodeListAction';
import { getReadOnlyValue } from '../../../../selectors';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { NodeItemBlock, NodeListContainer } from './components';
import NodeForm from './NodeForm/NodeForm';
import NodeItem from './NodeItem/NodeItem';
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
          <NodeItem
            nodeListID={nodeListID}
            key={item.id}
            item={item}
            index={index}
            readonly={readonly}
            removeNode={removeNode}
            changeNodeStatusInList={changeNodeStatusInList}
          />
        ))}
      </NodeItemBlock>
    </NodeListContainer>
  );
};
