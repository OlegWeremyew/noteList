import { v1 } from 'uuid';

import {
  ADD_NEW_NODE_IN_LIST,
  ADD_NEW_NODE_LIST,
  CHANGE_NODE_STATUS_IN_LIST,
  REMOVE_NODE_FROM_LIST,
  REMOVE_NODE_LIST,
  SET_CURRENT_LIST_IN_LOCAL_STORAGE,
} from '../constants';
import {
  ActionNodeListTypes,
  initialNodeListType,
  nodeListType,
  NodeType,
} from '../types';

export const initialNodeListState = {
  nodeLists: [] as nodeListType[],
};

export const nodeListReducer = (
  state: initialNodeListType = initialNodeListState,
  action: ActionNodeListTypes,
): initialNodeListType => {
  switch (action.type) {
    case ADD_NEW_NODE_LIST: {
      const newItem = {
        id: v1(),
        title: action.payload.title,
        node: [],
      };
      return {
        ...state,
        nodeLists: [...state.nodeLists, newItem],
      };
    }
    case ADD_NEW_NODE_IN_LIST: {
      const newNode: NodeType = {
        id: v1(),
        title: action.payload.nodeTitle,
        description: action.payload.nodeDescription,
        isCompleted: false,
      };
      return {
        ...state,
        nodeLists: state.nodeLists.map(item =>
          item.id === action.payload.nodeListID
            ? { ...item, node: [...item.node, newNode] }
            : item,
        ),
      };
    }
    case REMOVE_NODE_FROM_LIST: {
      return {
        ...state,
        nodeLists: state.nodeLists.map(item =>
          item.id === action.payload.nodeListID
            ? {
                ...item,
                node: item.node.filter(nodeItem => nodeItem.id !== action.payload.nodeID),
              }
            : item,
        ),
      };
    }
    case CHANGE_NODE_STATUS_IN_LIST: {
      return {
        ...state,
        nodeLists: state.nodeLists.map(item =>
          item.id === action.payload.nodeListID
            ? {
                ...item,
                node: item.node.map(nodeItem =>
                  nodeItem.id === action.payload.nodeID
                    ? { ...nodeItem, isCompleted: action.payload.status }
                    : nodeItem,
                ),
              }
            : item,
        ),
      };
    }
    case SET_CURRENT_LIST_IN_LOCAL_STORAGE: {
      return {
        ...state,
        nodeLists: action.payload.list,
      };
    }
    case REMOVE_NODE_LIST: {
      return {
        ...state,
        nodeLists: state.nodeLists.filter(node => node.id !== action.payload.nodeListID),
      };
    }
    default:
      return state;
  }
};
