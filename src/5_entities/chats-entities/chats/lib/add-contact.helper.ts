import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { authFirebase, firestoreApp } from '../../../../6_shared';
import { getUserByUid } from './get-user-by-uid.helper';
import { searctContacts } from './search-contacts.helper';
import { encryptChatId } from './encrypt-chat-id.helper';

export const addContact = async (search: string) => {
  const chatsRef = collection(firestoreApp, 'chats');

  const currentUser = authFirebase.currentUser;
  if (!currentUser) throw new Error('No user');

  const searchedContacts = await searctContacts(search);

  const contactRef = searchedContacts.docs[0];

  if (!contactRef) throw new Error('User not found');

  const contactDB = await getUserByUid(contactRef.id);
  const currentUserDB = await getUserByUid(currentUser.uid);

  if (!contactDB || !currentUserDB) throw new Error('Something went wrong with users');

  if (contactDB?.uid === currentUserDB?.uid) throw new Error(`You can't add yourself`);

  const chatDoc = doc(chatsRef, encryptChatId(currentUserDB.uid, contactDB.uid));

  const isExist = await getDoc(chatDoc);
  if (isExist.exists()) throw new Error('Chat already exists');

  await setDoc(chatDoc, {
    cid: chatDoc.id,
    users: [
      { uid: currentUserDB.uid, displayName: currentUserDB.displayName },
      { uid: contactDB.uid, displayName: contactDB.displayName }
    ],
    usersIds: [currentUserDB.uid, contactDB.uid],
    messages: []
  });
};
