import { FC } from 'react';
import { ResetFeature } from '../../../4_features/auth-features';
import { Typography } from '../../../6_shared/lib/typography/Typography';
import { LayoutComponent } from '../../../6_shared';

export const ResetPasswordPage: FC = () => {
  return (
    <LayoutComponent>
      <Typography variant='h2' fontFamily='Nautilus' textAlign='center'>
        Recovery instructions <br /> will be sent to the <br /> email
      </Typography>
      <ResetFeature />
    </LayoutComponent>
  );
};
