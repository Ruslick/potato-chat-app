import { FC } from 'react';
import { UsernameFeature } from '../../../4_features/auth-features/';
import { Typography } from '../../../6_shared/lib/typography/Typography';
import { LayoutComponent } from '../../../6_shared';

export const EnterUsernamePage: FC = () => {
  return (
    <LayoutComponent>
      <Typography variant='h2' fontFamily='Nautilus'>
        Your potato-name...
      </Typography>
      <UsernameFeature />
    </LayoutComponent>
  );
};
