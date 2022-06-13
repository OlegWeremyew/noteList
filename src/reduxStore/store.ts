import { combineReducers, createStore } from 'redux';

import { nodeListReducer } from './nodeListReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  nodeList: nodeListReducer,
});

export const store = createStore(rootReducer);
