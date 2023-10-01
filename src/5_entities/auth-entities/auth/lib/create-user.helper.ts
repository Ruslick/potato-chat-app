import { User } from 'firebase/auth';

export const createUserFromAuthUser = ({ uid, displayName, email }: User) => {
  return {
    uid,
    displayName,
    email,
    chats: []
  };
};
