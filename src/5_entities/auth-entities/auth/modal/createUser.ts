import { User } from 'firebase/auth';
import { DocumentReference } from 'firebase/firestore';

export interface UserDBDTO {
  uid: string;
  displayName: string;
  email: string;
  messages?: DocumentReference[];
}

// const userConverter: FirestoreDataConverter<UserDBDTO> = {
//   toFirestore(user: UserDBDTO): DocumentData {
//     return user;
//   },
//   fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): UserDBDTO {
//     const data = snapshot.data(options);
//     return {
//       author: data.author,
//       id: snapshot.id,
//       ref: snapshot.ref,
//       title: data.title
//     };
//   }
// };

// const ref = collection(firestore, 'posts').withConverter(postConverter);
// const [data, loading, error] = useCollectionData(ref);

export const createUserFromAuthUser = ({ uid, displayName, email }: User) => {
  return {
    uid,
    displayName,
    email
  };
};
