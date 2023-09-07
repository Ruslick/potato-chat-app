import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../2_pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {path: "/login", element: <h1>Login Page</h1>},
  {path: "/register", element: <h1>Register Page</h1>},
  {path: "/:userId", element: <h1>user</h1>},
  {path: "/group", element: <h1>group</h1>},
  {path: "/group/:groupId", element: <h1>group id</h1>},
  {path: "/messages/:userId", element: <h1>messages</h1>}
])