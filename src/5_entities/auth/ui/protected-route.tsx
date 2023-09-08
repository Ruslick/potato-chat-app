import { onAuthStateChanged } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { Loader, authFirebase } from "../../../6_shared";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
	children: React.ReactNode;
	withoutAuth?: boolean;
	redirectTo?: string;
}

export const Protected: FC<ProtectedProps> = ({
	children,
	withoutAuth = false,
	redirectTo = "/login",
}) => {
	const [isAuth, setIsAuth] = useState(false);
	const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      console.log("user", user);
      setIsAuth(!!user);
      setLoaded(true);
    });
  }, [])



	if (!loaded) {
		return <Loader />;
	}

	if (isAuth && !withoutAuth) {
		return children;
	}
	if (!isAuth && withoutAuth) {
		return children;
	}

	return <Navigate to={redirectTo} />;
};
