import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LoginFeature } from '../../../4_features/auth-features';
import { LoginWrapper } from '../../../6_shared/ui/login/loginWrapper.styled';

export const LoginPage: FC = () => {
  return (
    <>
      <LoginFeature />
      <LoginWrapper>
        <p>
          Forgot a password? <Link to={'/reset-password'}>Reset</Link>
        </p>
        <p>
          Not a member yet? <Link to={'/register'}>Sign up</Link>
        </p>
      </LoginWrapper>
    </>
  );
};
