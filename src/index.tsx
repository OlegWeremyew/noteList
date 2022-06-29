import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { GlobalStyles } from './globalStyles';

import { store } from 'reduxStore/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
      <GlobalStyles />
    </HashRouter>
  </Provider>,
);
