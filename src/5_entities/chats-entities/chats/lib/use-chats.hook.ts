import { FirestoreError, collection, query, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { authFirebase, firestoreApp } from '../../../../6_shared';
import { ChatDBDTO } from '../model/chat.modal';
import { useEffect, useState } from 'react';
import { chatConverter } from '../model/chat.converter';

export const useChats: () => [ChatDBDTO[], boolean, FirestoreError | undefined] = () => {
  const currentUser = authFirebase.currentUser;

  const [chats, setChats] = useState<ChatDBDTO[]>([]);
  if (!currentUser) throw new Error('No user');
  const [chatsRefs, loading, error] = useCollection(
    query(
      collection(firestoreApp, 'chats').withConverter(chatConverter),
      where('usersIds', 'array-contains', currentUser.uid)
    )
  );

  useEffect(() => {
    if (!chatsRefs) return;
    setChats(chatsRefs.docs.map((doc) => doc.data()));
  }, [chatsRefs]);

  return [chats, loading, error];
};
