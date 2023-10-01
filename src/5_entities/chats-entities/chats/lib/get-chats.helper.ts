/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { getDoc } from 'firebase/firestore';
import { authFirebase } from '../../../../6_shared';
import { chatConverter } from '../model/chat.converter';
import { getUserByUid } from './get-user-by-uid.helper';
import { ChatDBDTO } from '../model/chat.modal';

export const getChats: () => Promise<ChatDBDTO[]> = async () => {
  const currentUser = authFirebase.currentUser;
  if (!currentUser) throw new Error('No user');

  const currentUserDB = await getUserByUid(currentUser.uid);
  if (!currentUserDB) throw new Error('No user');

  const chatsRefs = currentUserDB.chats;

  const chats = await Promise.all(
    chatsRefs.map((chatRef) =>
      getDoc(chatRef.withConverter(chatConverter)).then((messages) => messages.data())
    )
  );

  return chats as ChatDBDTO[];
};
