import { onAuthStateChanged } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader, authFirebase } from "../../../../../6_shared";

interface IPrivateRoute {
	extexdsUsername?: boolean;
}

export const PrivateRoute: FC<IPrivateRoute> = ({
	extexdsUsername = false,
}) => {
	const [isAuth, setIsAuth] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [hasUserName, setHasUserName] = useState(false);

	// add when this service will be used
	// const [hasVerifiedEmail, setHasVerifiedEmail] = useState(false);

	useEffect(() => {
		onAuthStateChanged(authFirebase, (user) => {
			console.log(user?.displayName);
			setIsAuth(!!user);
			setHasUserName(!!user?.displayName);
			// setHasVerifiedEmail(!!user?.emailVerified)
			setLoaded(true);
		});
	}, []);

	if (!loaded) {
		return <Loader />;
	}

	if (!isAuth) {
		return <Navigate to={"/login"} />;
	}

	if (extexdsUsername && !hasUserName) {
		return <Outlet />;
	}
	if (extexdsUsername && hasUserName) {
		return <Navigate to={"/"} />;
	}

	if (!hasUserName) {
		return <Navigate to={"/enter-username"} />;
	}

	return <Outlet />;
};
