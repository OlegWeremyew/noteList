import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { MainContainer } from './components';

import { PATH } from 'constants/router';
import { ReturnComponentType } from 'types/ReturnComponentType';

const NodePage = React.lazy(() => import('pages/NodePage/NodePage'));
const SettingsPage = React.lazy(() => import('pages/SettingsPage/SettingsPage'));
const PageNotFound = React.lazy(() => import('pages/PageNotFound/PageNotFound'));

export const MainWindow = (): ReturnComponentType => (
  <MainContainer>
    <Routes>
      <Route path={PATH.HOME_PAGE_ROUTE} element={<NodePage />} />
      <Route path={PATH.SETTINGS_PAGE_ROUTE} element={<SettingsPage />} />
      <Route path={PATH.ERROR_PAGE_ROUTE} element={<PageNotFound />} />
    </Routes>
  </MainContainer>
);
