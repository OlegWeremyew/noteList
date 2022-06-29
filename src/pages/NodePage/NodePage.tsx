import React from 'react';

import { NodePageContainer } from './components';

import { NodeInner, NodeLists, Readonly } from 'components';
import { ReturnComponentType } from 'types/ReturnComponentType';

const NodePage = (): ReturnComponentType => (
  <NodePageContainer>
    <NodeInner />
    <Readonly />
    <NodeLists />
  </NodePageContainer>
);
export default NodePage;
