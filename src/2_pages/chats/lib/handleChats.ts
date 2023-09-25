/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { DocumentReference, getDoc } from 'firebase/firestore';
import { authFirebase } from '../../../6_shared';

export const handleChats = async (messages: unknown[]) => {
  const currentUser = authFirebase.currentUser;
  if (!currentUser) throw new Error('No user');
  const messagesRefs = await Promise.all(
    messages.map((message) => getDoc(message as DocumentReference))
  );
  const messagesUsersRefs = await Promise.all(
    messagesRefs.map((ms) => ms.get('users') as DocumentReference[])
  );

  const usersDone = await Promise.all(
    messagesUsersRefs.map((users) =>
      Promise.all(users.map((u) => getDoc(u).then((user) => user.data())))
    )
  );

  return usersDone.flat().filter((user) => user?.uid !== currentUser.uid);
};
