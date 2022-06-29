import { NodeType } from 'reduxStore/nodeListReducer/types';

export type NodeItemPropsType = {
  item: NodeType;
  nodeListID: string;
  index: number;
  readonly: boolean;
  removeNode: (nodeID: string) => void;
  changeNodeStatusInList: (nodeID: string, status: boolean) => void;
};
