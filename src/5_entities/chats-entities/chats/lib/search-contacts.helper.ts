import { collection, getDocs, or, query, where } from 'firebase/firestore';
import { firestoreApp } from '../../../../6_shared';

export const searctContacts = async (searchedValue: string) => {
  const usersRef = collection(firestoreApp, 'users');

  const result = await getDocs(
    query(usersRef, or(where('uid', '==', searchedValue), where('email', '==', searchedValue)))
  );
  return result;
};
