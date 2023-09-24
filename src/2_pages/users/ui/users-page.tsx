import { collection } from 'firebase/firestore';
import { FC } from 'react';
import { Loader, firestoreApp } from '../../../6_shared';

import { useCollection } from 'react-firebase-hooks/firestore';

export const UsersPage: FC = () => {
  const [value, loading, error] = useCollection(collection(firestoreApp, 'users'));

  if (error) throw new Error(error.message);

  return (
    <div>
      {<Loader isVisible={loading} />}
      {value && (
        <ol>
          {value.docs.map((doc) => (
            <li key={doc.id}>{doc.data().displayName}</li>
          ))}
        </ol>
      )}
    </div>
  );
};
