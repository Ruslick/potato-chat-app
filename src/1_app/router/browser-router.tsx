import { createBrowserRouter } from 'react-router-dom';
import {
  AddContactPage,
  ChatPage,
  ChatsPage,
  HomePage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage
} from '../../2_pages';
import { PrivateRoute } from '../../2_pages/private-route/private-route.component';
import { PublicRoute } from '../../2_pages/public-route/public-route.component';

export const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'add-contact', element: <AddContactPage /> },
      { path: 'chats', element: <ChatsPage /> },
      { path: 'chats/:cid', element: <ChatPage /> }
    ]
  },
  {
    element: <PublicRoute />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> }
    ]
  }
]);
