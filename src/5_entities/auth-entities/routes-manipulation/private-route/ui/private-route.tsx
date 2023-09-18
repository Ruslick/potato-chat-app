import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { Loader, authFirebase } from "../../../../../6_shared";

interface IPrivateRoute {
	extexdsUsername?: boolean;
}

export const PrivateRoute: FC<IPrivateRoute> = ({
	extexdsUsername = false,
}) => {

	const [user, loading, error] = useAuthState(authFirebase);

	// add when this service will be used
	// const [hasVerifiedEmail, setHasVerifiedEmail] = useState(false);


	if (error) throw new Error (error.message);

	if (loading) {
		return <Loader isVisible />;
	}

	if (!user) {
		return <Navigate to={"/login"} />;
	}

	if (extexdsUsername && !user.displayName) {
		return <Outlet />;
	}
	if (extexdsUsername && user.displayName) {
		return <Navigate to={"/"} />;
	}

	if (!user.displayName) {
		return <Navigate to={"/enter-username"} />;
	}



	return <Outlet />;
};
