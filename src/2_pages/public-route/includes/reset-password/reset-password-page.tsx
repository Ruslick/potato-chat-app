import { FC } from 'react';
import { Typography } from '../../../../6_shared/lib/typography/Typography';
import { ResetFeature } from '../../../../4_features/auth-features';

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
