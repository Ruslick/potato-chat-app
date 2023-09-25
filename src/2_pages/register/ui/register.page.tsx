import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RegisterFeature } from '../../../4_features/auth-features';
import { LoginWrapper } from '../../../6_shared/ui/login/loginWrapper.styled';

export const RegisterPage: FC = () => {
  return (
    <>
      <RegisterFeature />
      <LoginWrapper>
        <p>
          Already have an account ?<Link to={'/login'}>Sign in</Link>
        </p>
      </LoginWrapper>
    </>
  );
};
