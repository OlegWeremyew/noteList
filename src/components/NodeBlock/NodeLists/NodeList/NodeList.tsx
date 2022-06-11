import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { NodeListContainer } from './components';
import NodeForm from './NodeForm/NodeForm';
import { NodeListPropsType } from './types';

export const NodeList: FC<NodeListPropsType> = ({
  node,
  nodeListID,
}): ReturnComponentType => (
  <NodeListContainer>
    <NodeForm nodeListID={nodeListID} />
    <div>
      {node.map(item => (
        <div key={item.id}>
          <div>{item.isCompleted}</div>
          <div>{item.title}</div>
          <button type="button">del</button>
        </div>
      ))}
    </div>
  </NodeListContainer>
);
