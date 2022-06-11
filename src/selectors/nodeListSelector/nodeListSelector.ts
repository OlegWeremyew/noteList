import { nodeListType } from '../../reduxStore/nodeListReducer/types';
import { AppRootStateType } from '../../reduxStore/store';

export const getNodeLists = (state: AppRootStateType): nodeListType[] =>
  state.nodeList.nodeLists;
