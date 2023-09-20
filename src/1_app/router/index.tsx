import { createBrowserRouter } from "react-router-dom";
import {
  EnterUsernamePage,
  HomePage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from "../../2_pages";
import { PrivateRoute, PublicRoute } from "../../5_entities/auth-entities";

export const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    element: <PublicRoute />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
    ],
  },
  {
    element: <PrivateRoute extexdsUsername={true} />,
    children: [{ path: "enter-username", element: <EnterUsernamePage /> }],
  },
]);
