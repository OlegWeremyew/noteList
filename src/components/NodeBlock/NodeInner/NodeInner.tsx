import React from 'react';

import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { NodeInnerContainer } from './components';
import { InnerForm } from './InnerForm';

export const NodeInner = (): ReturnComponentType => (
  <NodeInnerContainer>
    <h1>Node List</h1>
    <InnerForm />
  </NodeInnerContainer>
);
