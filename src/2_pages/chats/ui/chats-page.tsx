import { doc } from 'firebase/firestore';
import { FC } from 'react';

import { useDocument } from 'react-firebase-hooks/firestore';
import { userConverter } from '../../../5_entities/auth-entities/auth/modal/createUser';
import { authFirebase, firestoreApp } from '../../../6_shared';
import { handleChats } from '../lib/handleChats';

export const ChatsPage: FC = () => {
  const currentUser = authFirebase.currentUser;
  if (!currentUser) throw new Error('No user');

  const [data] = useDocument(
    doc(firestoreApp, 'users', currentUser.uid).withConverter(userConverter)
  );

  const messages = data?.data()?.messages;
  if (!messages) return null;
  console.log(handleChats(messages));

  return (
    <div>
      <h1>ChatsPage</h1>
    </div>
  );
};
