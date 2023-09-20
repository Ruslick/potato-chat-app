import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { Loader, authFirebase } from "../../../../../6_shared";
import { EmailVerificationModal } from "../../../../../4_features/auth-features/email-verification-modal/ui/email-verification-miodal.component";
import { IPrivateRoute } from "../model/pivate-route.model";

export const PrivateRoute: FC<IPrivateRoute> = ({
  extexdsUsername = false,
}) => {
  const [user, loading, error] = useAuthState(authFirebase);

  if (error) throw new Error(error.message);

  if (loading) {
    return <Loader isVisible />;
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  if (extexdsUsername) {
    if (!user.displayName) {
      return <Outlet />;
    }

    if (user.displayName) {
      return <Navigate to={"/"} />;
    }
  }

  if (!user.displayName) {
    return <Navigate to={"/enter-username"} />;
  }

  return (
    <>
      {user.displayName && !user.emailVerified && <EmailVerificationModal />}
      <Outlet />
    </>
  );
};
