import { FC } from "react";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "../router";
import { store } from "../store/initStore";

import { ThemeProvider } from "styled-components";
import GlobalTheme from "../../6_shared/lib/global.theme";

export const App: FC = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};
