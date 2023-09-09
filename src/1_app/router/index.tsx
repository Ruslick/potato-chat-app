import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../../2_pages";
import { Protected } from "../../5_entities/auth";

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Protected>
				<HomePage />
			</Protected>
		),
	},
	{
		path: "/login",
		element: (
			<Protected withoutAuth redirectTo="/">
				<LoginPage />
			</Protected>
		),
	},
	{
		path: "/register",
		element: (
			<Protected withoutAuth redirectTo="/">
				<RegisterPage />
			</Protected>
		),
	},
	{
		path: "/:userId",
		element: (
			<Protected>
				<h1>user</h1>
			</Protected>
		),
	},
	{ path: "/group", element: <h1>group</h1> },
	{ path: "/group/:groupId", element: <h1>group id</h1> },
	{ path: "/messages/:userId", element: <h1>messages</h1> },
]);
