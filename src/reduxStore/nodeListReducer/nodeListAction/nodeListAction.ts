import {
  ADD_NEW_NODE_IN_LIST,
  ADD_NEW_NODE_LIST,
  CHANGE_NODE_LIST_ITEM_DESCRIPTION,
  CHANGE_NODE_LIST_ITEM_TITLE,
  CHANGE_NODE_LIST_TILE,
  CHANGE_NODE_STATUS_IN_LIST,
  REMOVE_NODE_FROM_LIST,
  REMOVE_NODE_LIST,
  SET_CURRENT_LIST_IN_LOCAL_STORAGE,
} from 'reduxStore/nodeListReducer/constants';
import { nodeListType } from 'reduxStore/nodeListReducer/types';

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
  setNodeListInLocalStorage(list: nodeListType[]) {
    return {
      type: SET_CURRENT_LIST_IN_LOCAL_STORAGE,
      payload: {
        list,
      },
    } as const;
  },
  changeNodeListTitle(listID: string, newTitle: string) {
    return {
      type: CHANGE_NODE_LIST_TILE,
      payload: {
        listID,
        newTitle,
      },
    } as const;
  },
  changeNodeListItemTitle(nodeListID: string, itemID: string, newTitle: string) {
    return {
      type: CHANGE_NODE_LIST_ITEM_TITLE,
      payload: {
        nodeListID,
        itemID,
        newTitle,
      },
    } as const;
  },
  changeNodeListItemDescription(
    nodeListID: string,
    itemID: string,
    newDescription: string,
  ) {
    return {
      type: CHANGE_NODE_LIST_ITEM_DESCRIPTION,
      payload: {
        nodeListID,
        itemID,
        newDescription,
      },
    } as const;
  },
};
