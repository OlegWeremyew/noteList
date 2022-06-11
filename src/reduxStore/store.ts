import { combineReducers, createStore } from 'redux';

import { themeReducer } from './themeReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = createStore(rootReducer);
