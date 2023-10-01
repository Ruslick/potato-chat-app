import { useEffect, useState } from 'react';
import { getUserByUid } from './get-user-by-uid.helper';
import { authFirebase } from '../../../../6_shared';
import { UserDBDTO } from '../../../auth-entities';

export const useGetCurrentUserDB: () => [
  UserDBDTO | undefined,
  boolean,
  Error | undefined
] = () => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [currentUserDB, setCurrentUserDB] = useState<UserDBDTO | undefined>(undefined);

  const currentUser = authFirebase.currentUser;

  useEffect(() => {
    setLoading(true);
    if (currentUser) {
      getUserByUid(currentUser.uid)
        .then(setCurrentUserDB)
        .catch((err: Error) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentUser]);

  return [currentUserDB, loading, error];
};
