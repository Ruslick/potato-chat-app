import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LoginFeature } from '../../../4_features/auth-features';

export const LoginPage: FC = () => {
  return (
    <>
      <LoginFeature />
      <p>
        Forgot a password? <Link to={'/reset-password'}>Reset</Link>
      </p>
      <p>
        Not a member yet? <Link to={'/register'}>Sign up</Link>
      </p>
    </>
  );
};
