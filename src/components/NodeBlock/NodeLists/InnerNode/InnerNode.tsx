import React, { FC } from 'react';

import { StyledButton } from '../../../../layouts';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';
import { InnerNodeContainer } from '../NodeList/components';

import { ListTitle } from './components';

export const InnerNode: FC<any> = ({ removeNodeList, nodeList }): ReturnComponentType => (
  <InnerNodeContainer>
    <ListTitle>{nodeList.title}</ListTitle>
    <StyledButton type="button" onClick={() => removeNodeList(nodeList.id)}>
      Delete list
    </StyledButton>
  </InnerNodeContainer>
);
