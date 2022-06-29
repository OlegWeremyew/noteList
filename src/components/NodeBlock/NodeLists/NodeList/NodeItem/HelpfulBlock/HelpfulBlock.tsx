import React, { FC } from 'react';

import { HelpfulBlockContainer } from './components';
import { HelpfulBlockType } from './types';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const HelpfulBlock: FC<HelpfulBlockType> = ({
  item,
  readonly,
  changeNodeStatusInList,
}): ReturnComponentType => (
  <HelpfulBlockContainer>
    <label htmlFor={item.id}>Was it helpful?</label>
    <input
      id={item.id}
      type="checkbox"
      checked={item.isCompleted}
      onChange={e => changeNodeStatusInList(item.id, e.currentTarget.checked)}
      disabled={readonly}
    />
  </HelpfulBlockContainer>
);
