import { onAuthStateChanged } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { Loader, authFirebase } from "../../../6_shared";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
	page: React.ReactNode;
	withoutAuth?: boolean;
	redirectTo?: string;
}

export const Protected: FC<ProtectedProps> = ({
	withoutAuth = false,
	redirectTo = "/login",
	page
}) => {
	const [isAuth, setIsAuth] = useState(false);
	const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      setIsAuth(!!user);
      setLoaded(true);
    });
  }, [])



	if (!loaded) {
		return <Loader />;
	}


	if (isAuth !== withoutAuth) {
		
		return page;
	}


	return <Navigate to={redirectTo} />;
};
