import React from 'react';

import { useDispatch } from 'react-redux';

import { nodeListAction } from '../../../reduxStore';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import { useGetNodeList } from '../../../utils';

import { NodeListBlock, NodeListsContainer } from './components';
import { InnerNode } from './InnerNode/InnerNode';
import { NodeList } from './NodeList';

export const NodeLists = (): ReturnComponentType => {
  const nodeLists = useGetNodeList();

  const dispatch = useDispatch();

  const removeNodeList = (nodeListID: string): void => {
    dispatch(nodeListAction.removeNodeList(nodeListID));
  };

  return (
    <NodeListsContainer>
      {nodeLists.map(nodeList => (
        <NodeListBlock key={nodeList.id}>
          <InnerNode removeNodeList={removeNodeList} nodeList={nodeList} />
          <NodeList node={nodeList.node} nodeListID={nodeList.id} />
        </NodeListBlock>
      ))}
    </NodeListsContainer>
  );
};
