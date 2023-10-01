import { FC } from 'react';
import { authFirebase } from '../../../../6_shared';
import { Link } from 'react-router-dom';
import { LogoutFeature } from '../../../../4_features/auth-features';
import { Button } from '../../../../6_shared/ui/button/button.component';

export const HomePage: FC = () => {
  if (!authFirebase.currentUser) throw new Error('No user');

  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome, {authFirebase.currentUser.displayName}</p>
      <Link to={'/add-contact'}>
        <Button>Add contact</Button>
      </Link>
      <Link to={'/chats'}>
        <Button>Chats</Button>
      </Link>
      <LogoutFeature />
    </div>
  );
};
