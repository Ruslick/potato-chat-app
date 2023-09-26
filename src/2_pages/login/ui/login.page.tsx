import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LoginFeature } from '../../../4_features/auth-features';
import { LinksLoginWrapper } from '../../../6_shared/ui/login/loginWrapper.styled';
import { Typography } from '../../../6_shared/lib/typography/Typography';

export const LoginPage: FC = () => {
  return (
    <>
      <Typography variant='h1' fontStyle='italic'>
        Sign in
      </Typography>
      <LoginFeature />
      <LinksLoginWrapper>
        <Typography variant='p2'>
          Forgot a password? <Link to={'/reset-password'}>Reset</Link>
        </Typography>
        <Typography variant='p2'>
          Not a member yet? <Link to={'/register'}>Sign up</Link>
        </Typography>
      </LinksLoginWrapper>
    </>
  );
};
