import React from 'react';

import { NodeInner, NodeLists } from '../../components/NodeBlock';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const NodePage = (): ReturnComponentType => (
  <div>
    <NodeInner />
    <NodeLists />
  </div>
);
export default NodePage;
