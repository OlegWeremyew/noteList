import {
  ADD_NEW_NODE_IN_LIST,
  ADD_NEW_NODE_LIST, CHANGE_NODE_STATUS_IN_LIST,
  REMOVE_NODE_FROM_LIST,
  REMOVE_NODE_LIST
} from "../constants";

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
  addNewNodeInList(nodeListID: string, nodeTitle: string, nodeDescription: string) {
    return {
      type: ADD_NEW_NODE_IN_LIST,
      payload: {
        nodeListID,
        nodeTitle,
        nodeDescription,
      },
    } as const;
  },
  removeNodeFromList(nodeListID: string, nodeID: string) {
    return {
      type: REMOVE_NODE_FROM_LIST,
      payload: {
        nodeListID,
        nodeID,
      },
    } as const;
  },
  changeNodeStatusInList(nodeListID: string, nodeID: string, status: boolean) {
    return {
      type: CHANGE_NODE_STATUS_IN_LIST,
      payload: {
        nodeListID,
        nodeID,
        status,
      },
    } as const;
  },
};
