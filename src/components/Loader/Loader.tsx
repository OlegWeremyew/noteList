import React from 'react';

import { LoaderBlock, LoaderContainer } from './components';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Loader = (): ReturnComponentType => (
  <LoaderContainer>
    <LoaderBlock>⊗</LoaderBlock>
  </LoaderContainer>
);
