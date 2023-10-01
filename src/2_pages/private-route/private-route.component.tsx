import { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';
import { EmailVerificationFeature } from '../../4_features/auth-features';
import { Loader, authFirebase } from '../../6_shared';

export const PrivateRoute: FC = () => {
  const [user, loading, error] = useAuthState(authFirebase);

  if (error) throw new Error(error.message);

  if (loading) {
    return <Loader isVisible />;
  }

  if (!user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <>
      {!user.emailVerified && <EmailVerificationFeature />}
      <Outlet />
    </>
  );
};
