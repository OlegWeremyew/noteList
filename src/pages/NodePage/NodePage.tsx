import React from 'react';

import { NodeInner, NodeLists, Readonly } from '../../components';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { NodePageContainer } from './components';

const NodePage = (): ReturnComponentType => (
  <NodePageContainer>
    <NodeInner />
    <Readonly />
    <NodeLists />
  </NodePageContainer>
);
export default NodePage;
