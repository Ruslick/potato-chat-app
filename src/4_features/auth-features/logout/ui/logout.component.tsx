import { signOut } from 'firebase/auth';
import { FC } from 'react';
import { authFirebase } from '../../../../6_shared';
import { Button } from '../../../../6_shared/ui/button/button.component';
import { globalTheme } from '../../../../6_shared/lib/global.theme';

export const Logout: FC = () => {
  // fix this: native signOut from firebase doesn't work
  const handleClick = () => {
    signOut(authFirebase);
  };

  return (
    <Button
      width='250px'
      height='50px'
      backgroundColor={globalTheme.colors.primary.darkOrange}
      onClick={handleClick}
    >
      Logout
    </Button>
  );
};
