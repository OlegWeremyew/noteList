import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';
import { InnerNodeContainer } from '../NodeList/components';

export const InnerNode: FC<any> = ({ removeNodeList, nodeList }): ReturnComponentType => (
  <InnerNodeContainer>
    <h1>{nodeList.title}</h1>
    <button type="button" onClick={() => removeNodeList(nodeList.id)}>
      del list
    </button>
  </InnerNodeContainer>
);
