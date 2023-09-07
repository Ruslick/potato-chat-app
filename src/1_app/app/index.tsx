import { FC, useEffect } from "react";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "../router";
import { store } from "../store/initStore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../6_shared";

export const App: FC = () => {
	useEffect(() => {
		initializeApp(firebaseConfig);
	}, []);

	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
};
