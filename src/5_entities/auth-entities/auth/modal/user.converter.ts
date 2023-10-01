import { UserDBDTO } from './user.modal';
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore';

export const userConverter: FirestoreDataConverter<UserDBDTO> = {
  toFirestore(user: UserDBDTO): DocumentData {
    return user;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): UserDBDTO {
    const data = snapshot.data(options);
    return data as UserDBDTO;
  }
};
