import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RegisterFeature } from '../../../4_features/auth-features';

export const RegisterPage: FC = () => {
  return (
    <>
      <RegisterFeature />

      <p>
        Already have an account ? <Link to={'/login'}>Sign in</Link>
      </p>
    </>
  );
};
