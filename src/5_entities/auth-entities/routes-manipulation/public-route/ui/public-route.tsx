import { onAuthStateChanged } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader, authFirebase } from "../../../../../6_shared";

export const PublicRoute: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      setIsAuth(!!user);
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return <Loader />;
  }

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};
