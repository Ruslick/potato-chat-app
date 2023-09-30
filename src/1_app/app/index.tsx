import { FC } from 'react';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from '../router';
import { store } from '../store/initStore';

import { globalTheme } from '../../6_shared/lib/global.theme';
import { LayoutComponent } from '../../6_shared';

export const App: FC = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Provider store={store}>
        <LayoutComponent>
          <RouterProvider router={router} />
        </LayoutComponent>
      </Provider>
    </ThemeProvider>
  );
};
