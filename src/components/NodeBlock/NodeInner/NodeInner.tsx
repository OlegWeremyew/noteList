import React from 'react';

import { NodeInnerContainer, Title } from './components';
import { InnerForm } from './InnerForm';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const NodeInner = (): ReturnComponentType => (
  <NodeInnerContainer>
    <Title>Node List</Title>
    <InnerForm />
  </NodeInnerContainer>
);
