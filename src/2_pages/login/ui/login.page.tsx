import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LoginFeature } from '../../../4_features/auth-features';
import { LinksLoginWrapper } from '../../../6_shared/ui/login/loginWrapper.styled';
import { Typography } from '../../../6_shared/lib/typography/Typography';
import { LayoutComponent } from '../../../6_shared';

export const LoginPage: FC = () => {
  return (
    <LayoutComponent>
      <Typography variant='h1' fontFamily='Nautilus' margin='0 0 40px 0'>
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
    </LayoutComponent>
  );
};
