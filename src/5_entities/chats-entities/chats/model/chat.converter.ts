import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore';
import { ChatDBDTO } from './chat.modal';

export const chatConverter: FirestoreDataConverter<ChatDBDTO> = {
  toFirestore(chat: ChatDBDTO): DocumentData {
    return chat;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ChatDBDTO {
    const data = snapshot.data(options);
    return data as ChatDBDTO;
  }
};
