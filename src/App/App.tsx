import React, { Suspense } from 'react';

import { ThemeProvider } from 'styled-components';

import { Header, MainWindow } from '../components';
import { themeLight } from '../theme';
import { ReturnComponentType } from '../types/ReturnComponentType';

import { AppWrapper } from './components';

export const App = (): ReturnComponentType => (
  <ThemeProvider theme={themeLight}>
    <Suspense fallback={<h1>df</h1>}>
      <AppWrapper>
        <Header />
        <MainWindow />
      </AppWrapper>
    </Suspense>
  </ThemeProvider>
);
