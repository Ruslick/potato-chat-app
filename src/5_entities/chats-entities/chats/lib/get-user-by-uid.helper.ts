import { doc, getDoc } from 'firebase/firestore';
import { firestoreApp } from '../../../../6_shared';
import { userConverter } from '../../../auth-entities';

export const getUserByUid = async (uid: string) => {
  const result = await getDoc(doc(firestoreApp, 'users', uid).withConverter(userConverter)).then(
    (currentUserDoc) => currentUserDoc.data()
  );
  return result;
};
