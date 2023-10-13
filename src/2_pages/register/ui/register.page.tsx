import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RegisterFeature } from '../../../4_features/auth-features';
import { LinksLoginWrapper } from '../../../6_shared/ui/login/loginWrapper.styled';
import { Typography } from '../../../6_shared/lib/typography/Typography';
import { LayoutComponent } from '../../../6_shared';

export const RegisterPage: FC = () => {
  return (
    <LayoutComponent>
      <Typography variant='h1' fontFamily='Nautilus' margin='0 0 40px 0'>
        Sign up
      </Typography>
      <RegisterFeature />
      <LinksLoginWrapper>
        <Typography variant='p2'>Already have an account ?</Typography>
        <Typography variant='p2'>
          <Link to={'/login'}>Sign in</Link>
        </Typography>
      </LinksLoginWrapper>
    </LayoutComponent>
  );
};
