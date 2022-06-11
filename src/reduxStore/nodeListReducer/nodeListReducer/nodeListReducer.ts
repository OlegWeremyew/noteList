import { v1 } from 'uuid';

import { ADD_NEW_NODE_IN_LIST, ADD_NEW_NODE_LIST, REMOVE_NODE_LIST } from '../constants';
import {
  ActionNodeListTypes,
  initialNodeListType,
  nodeListType,
  NodeType,
} from '../types';

export const initialNodeListState = {
  nodeLists: [
    {
      id: '1',
      title: 'df',
      node: [
        { id: '101', title: 'огурцы', description: 'dfdf', isCompleted: false },
        { id: '102', title: 'огурцы1111', description: 'dfdf', isCompleted: true },
      ],
    },
    {
      id: '2',
      title: 'dfsd',
      node: [
        { id: '201', title: 'Помидоры', description: 'dfdf', isCompleted: false },
        { id: '202', title: 'Помидоры', description: 'dfdf', isCompleted: true },
      ],
    },
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
