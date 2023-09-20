import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { Loader, authFirebase } from "../../../../../6_shared";

export const PublicRoute: FC = () => {
  const [user, loading, error] = useAuthState(authFirebase);

  if (error) throw new Error(error.message);

  if (loading) {
    return <Loader isVisible={loading} />;
  }

  if (user) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};
