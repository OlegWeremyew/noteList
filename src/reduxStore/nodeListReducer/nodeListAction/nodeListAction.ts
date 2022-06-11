import { ADD_NEW_NODE_LIST, REMOVE_NODE_LIST } from '../constants';

export const nodeListAction = {
  addNewNodeList(title: string) {
    return {
      type: ADD_NEW_NODE_LIST,
      payload: {
        title,
      },
    } as const;
  },
  removeNodeList(nodeListID: string) {
    return {
      type: REMOVE_NODE_LIST,
      payload: {
        nodeListID,
      },
    } as const;
  },
};
