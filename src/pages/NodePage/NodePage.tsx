import React from 'react';

import { NodeInner, NodeLists } from '../../components/NodeBlock';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { NodePageContainer } from './components';

const NodePage = (): ReturnComponentType => (
  <NodePageContainer>
    <NodeInner />
    <NodeLists />
  </NodePageContainer>
);
export default NodePage;
