import React from 'react';

import { ThemeProvider } from 'styled-components';

import { ReturnComponentType } from '../types/ReturnComponentType';

export const App = (): ReturnComponentType => {
  const currentTheme: any = {};

  return (
    <ThemeProvider theme={currentTheme}>
      <React.Suspense fallback={<h1>df</h1>}>
        <div className="App">чсичс</div>
      </React.Suspense>
    </ThemeProvider>
  );
};
