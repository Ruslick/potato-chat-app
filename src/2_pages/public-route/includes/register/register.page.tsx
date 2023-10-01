import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../../../../6_shared/lib/typography/Typography';
import { RegisterFeature } from '../../../../4_features/auth-features';
import { LinksLoginWrapper } from '../../../../6_shared/ui/login/loginWrapper.styled';

export const RegisterPage: FC = () => {
  return (
    <>
      <Typography variant='h1'>Sign up</Typography>
      <RegisterFeature />
      <LinksLoginWrapper>
        <Typography variant='p2'>Already have an account ?</Typography>
        <Typography variant='p2'>
          <Link to={'/login'}>Sign in</Link>
        </Typography>
      </LinksLoginWrapper>
    </>
  );
};
