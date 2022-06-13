import { NodeType } from '../../../../../../../reduxStore/nodeListReducer/types';

export type HelpfulBlockType = {
  item: NodeType;
  readonly: boolean;
  changeNodeStatusInList: (nodeID: string, status: boolean) => void;
};
