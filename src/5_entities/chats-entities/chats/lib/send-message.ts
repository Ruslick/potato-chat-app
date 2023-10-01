import { Timestamp, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { authFirebase, firestoreApp } from '../../../../6_shared';
import { chatConverter } from '../model/chat.converter';

export const sendMessage = async (chatId: string, message: string) => {
  const currentUser = authFirebase.currentUser;
  if (!currentUser) throw new Error('No user');
  const chatRef = doc(firestoreApp, 'chats', chatId).withConverter(chatConverter);
  const chatDB = await getDoc(chatRef);
  if (!chatDB.exists()) return Promise.reject('Chat not found');
  const result = updateDoc(chatRef, {
    messages: arrayUnion({
      message,
      date: Timestamp.now(),
      sender: { uid: currentUser.uid, displayName: currentUser.displayName }
    })
  });
  return result;
};
