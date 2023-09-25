import { createBrowserRouter } from 'react-router-dom';
import {
  ChatsPage,
  EnterUsernamePage,
  HomePage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  SearchPage
} from '../../2_pages';
import { PrivateRoute, PublicRoute } from '../../5_entities/auth-entities/routes-manipulation';

export const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'chats', element: <ChatsPage /> }
    ]
  },
  {
    element: <PublicRoute />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> }
    ]
  },
  {
    element: <PrivateRoute extexdsUsername={true} />,
    children: [{ path: 'enter-username', element: <EnterUsernamePage /> }]
  }
]);
