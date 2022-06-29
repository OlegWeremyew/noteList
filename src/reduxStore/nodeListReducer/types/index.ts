import { nodeListAction } from 'reduxStore/nodeListReducer';
import { InferActionTypes } from 'reduxStore/types';

export type initialNodeListType = {
  nodeLists: nodeListType[];
};
export type ActionNodeListTypes = InferActionTypes<typeof nodeListAction>;

export type nodeListType = {
  id: string;
  title: string;
  node: NodeType[];
  sort: boolean;
};

export type NodeType = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};
