import { v1 } from 'uuid';

import { ADD_NEW_NODE_LIST, REMOVE_NODE_LIST } from '../constants';
import { ActionNodeListTypes, initialNodeListType, nodeListType } from '../types';

export const initialNodeListState = {
  nodeLists: [
    { id: '1', title: 'df', node: [] },
    { id: '2', title: 'dfsd', node: [] },
  ] as nodeListType[],
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
