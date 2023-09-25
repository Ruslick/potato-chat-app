import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  or,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import { authFirebase, firestoreApp } from '../../../6_shared';

export const addContact = async (search: string) => {
  const usersRef = collection(firestoreApp, 'users');
  const messagesRef = collection(firestoreApp, 'messages');

  const contactProfile = await getDocs(
    query(usersRef, or(where('displayName', '==', search), where('email', '==', search)))
  );

  const currentUser = authFirebase.currentUser;
  if (!currentUser) throw new Error('No user');
  const currentUsetUid = currentUser.uid;

  const contactUid = contactProfile.docs[0].id;

  const contactDBRef = doc(firestoreApp, 'users', contactUid);
  const currentUserDBRef = doc(firestoreApp, 'users', currentUser.uid);

  if (contactUid === currentUsetUid) throw new Error(`You can't add yourself`);

  const checkedMessages = await getDocs(
    query(messagesRef, where('users', 'array-contains', [currentUsetUid, contactUid]))
  );

  if (!checkedMessages.empty) throw new Error('Contact already added');

  const messagesDoc = await addDoc(messagesRef, {
    users: [contactDBRef, currentUserDBRef]
  });

  await Promise.all([
    updateDoc(currentUserDBRef, {
      messages: arrayUnion(messagesDoc)
    }),
    updateDoc(contactDBRef, {
      messages: arrayUnion(messagesDoc)
    })
  ]);
};
