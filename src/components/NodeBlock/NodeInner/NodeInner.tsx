import React from 'react';

import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { NodeInnerContainer, Title } from './components';
import { InnerForm } from './InnerForm';

export const NodeInner = (): ReturnComponentType => (
  <NodeInnerContainer>
    <Title>Node List</Title>
    <InnerForm />
  </NodeInnerContainer>
);
