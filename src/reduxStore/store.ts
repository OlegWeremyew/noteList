import { combineReducers, createStore } from 'redux';

import { nodeListReducer } from './nodeListReducer/nodeListReducer/nodeListReducer';
import { themeReducer } from './themeReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  theme: themeReducer,
  nodeList: nodeListReducer,
});

export const store = createStore(rootReducer);
