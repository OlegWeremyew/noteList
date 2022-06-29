import { nodeListType } from 'reduxStore/nodeListReducer/types';

export type InnerNodeType = {
  removeNodeList: (nodeListID: string) => void;
  nodeList: nodeListType;
};
