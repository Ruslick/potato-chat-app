import { FC } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';
import { LogoutFeature } from '../../../4_features/auth-features';
import { authFirebase } from '../../../6_shared';
import { Link } from 'react-router-dom';
import { Button } from '../../../6_shared/ui/button/button.component';

export const HomePage: FC = () => {
  if (!authFirebase.currentUser) throw new Error('No user');
  const [user] = useIdToken(authFirebase);

  if (!user) throw new Error('No user');

  // const [data] = useCollection(
  //   query(collection(firestoreApp, 'messages'), where('users', 'array-contains', user.uid))
  // );

  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome, {authFirebase.currentUser.displayName}</p>
      {!user.emailVerified && <p>Email {user.email} not verified</p>}
      <Link to={'/search'}>
        <Button>Add contact</Button>
      </Link>
      <Link to={'/chats'}>
        <Button>Chats</Button>
      </Link>
      <LogoutFeature />
    </div>
  );
};
