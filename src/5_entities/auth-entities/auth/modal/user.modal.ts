import { DocumentReference } from 'firebase/firestore';

export interface UserDBDTO {
  uid: string;
  displayName: string;
  email: string;
  chats: DocumentReference[];
}
