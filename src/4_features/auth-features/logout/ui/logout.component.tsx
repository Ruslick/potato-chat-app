import { signOut } from 'firebase/auth';
import { FC } from 'react';
import { authFirebase } from '../../../../6_shared';
import { Button } from '../../../../6_shared/ui/button/button.component';

export const Logout: FC = () => {
  // fix this: native signOut from firebase doesn't work
  const handleClick = () => {
    signOut(authFirebase);
  };

  return <Button onClick={handleClick}>Logout</Button>;
};
