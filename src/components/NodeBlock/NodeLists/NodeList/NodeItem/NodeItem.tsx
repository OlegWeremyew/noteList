import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../types/ReturnComponentType';

import { DeleteNodeButton, NodeItemContainer } from './components';
import { HelpfulBlock } from './HelpfulBlock';
import { NodeDescription } from './NodeDescription';
import { NodeTitle } from './NodeTitle';
import { NodeItemPropsType } from './types';

export const NodeItem: FC<NodeItemPropsType> = ({
  item,
  index,
  changeNodeStatusInList,
  readonly,
  removeNode,
  nodeListID,
}): ReturnComponentType => (
  <NodeItemContainer key={item.id}>
    <NodeTitle
      index={index + 1}
      title={item.title}
      itemID={item.id}
      nodeListID={nodeListID}
    />
    <HelpfulBlock
      changeNodeStatusInList={changeNodeStatusInList}
      readonly={readonly}
      item={item}
    />
    <NodeDescription
      itemID={item.id}
      nodeListID={nodeListID}
      description={item.description}
    />
    <DeleteNodeButton
      disabled={readonly}
      type="button"
      onClick={() => removeNode(item.id)}
    >
      Delete node
    </DeleteNodeButton>
  </NodeItemContainer>
);

export default NodeItem;
