import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { StyledButton } from '../../../../layouts';
import { getReadOnlyValue } from '../../../../selectors';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';
import { InnerNodeContainer } from '../NodeList/components';

import { ListTitle } from './components';

export const InnerNode: FC<any> = ({ removeNodeList, nodeList }): ReturnComponentType => {
  const readonly = useSelector(getReadOnlyValue);

  return (
    <InnerNodeContainer>
      <ListTitle>{nodeList.title}</ListTitle>
      <StyledButton
        type="button"
        onClick={() => removeNodeList(nodeList.id)}
        disabled={readonly}
      >
        Del
      </StyledButton>
    </InnerNodeContainer>
  );
};
