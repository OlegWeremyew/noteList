import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { NodeListContainer } from './components';
import { NodeListPropsType } from './types';

export const NodeList: FC<NodeListPropsType> = ({
  title,
  removeNodeList,
  id,
}): ReturnComponentType => (
  <NodeListContainer>
    <div>
      <h1>{title}</h1>
      <button type="button" onClick={() => removeNodeList(id)}>
        del list
      </button>
    </div>
    <div>
      <input type="text" placeholder="node title" />
      <input type="text" placeholder="node description" />
      <button type="button">add node</button>
    </div>
  </NodeListContainer>
);
