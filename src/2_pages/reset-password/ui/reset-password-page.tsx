import { FC } from 'react';
import { ResetFeature } from '../../../4_features/auth-features';
import { Typography } from '../../../6_shared/lib/typography/Typography';

export const ResetPasswordPage: FC = () => {
  return (
    <>
      <Typography variant='h2'>
        Recovery instructions <br /> will be sent to the <br /> email
      </Typography>
      <ResetFeature />
    </>
  );
};
