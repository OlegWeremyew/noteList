import React, { Suspense } from 'react';

import { ThemeProvider } from 'styled-components';

import { Header, Loader, MainWindow } from '../components';
import { ReturnComponentType } from '../types/ReturnComponentType';
import { useGetTheme } from '../utils';

import { AppWrapper } from './components';

export const App = (): ReturnComponentType => {
  const themeStyle = useGetTheme();
  return (
    <ThemeProvider theme={themeStyle}>
      <Suspense fallback={<Loader />}>
        <AppWrapper>
          <Header />
          <MainWindow />
        </AppWrapper>
      </Suspense>
    </ThemeProvider>
  );
};
