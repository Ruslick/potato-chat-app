import { FC } from 'react';
import { UsernameFeature } from '../../../4_features/auth-features/';
import { Typography } from '../../../6_shared/lib/typography/Typography';

export const EnterUsernamePage: FC = () => {
  return (
    <>
      <Typography variant='h2'>Your potato-name...</Typography>
      <UsernameFeature />
    </>
  );
};
