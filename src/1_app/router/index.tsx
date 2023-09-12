import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../../2_pages";
import { Protected } from "../../5_entities/auth";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Protected page={<HomePage />} />,
	},
	{
		path: "/login",
		element: <Protected withoutAuth redirectTo="/" page={<LoginPage />} />,
	},
	{
		path: "/register",
		element: <Protected withoutAuth redirectTo="/" page={<RegisterPage />} />,
	},
]);
