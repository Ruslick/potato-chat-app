import { FC } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';
import { LogoutFeature } from '../../../4_features/auth-features';
import { authFirebase, firestoreApp } from '../../../6_shared';

import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';

export const HomePage: FC = () => {
  if (!authFirebase.currentUser) throw new Error('No user');
  const [user] = useIdToken(authFirebase);

  if (!user) throw new Error('No user');

  const [data] = useDocument(doc(firestoreApp, 'users', user.uid));

  console.log(data);

  // getDoc(doc(firestoreApp, 'messages', data?.data()?.messages[0].id));
  // if (data?.data()?.messages.length === 0) throw new Error('No messages');

  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome, {authFirebase.currentUser.displayName}</p>
      {!user.emailVerified && <p>Email {user.email} not verified</p>}
      <div>
        <h1>Chats</h1>
      </div>
      <LogoutFeature />
    </div>
  );
};
