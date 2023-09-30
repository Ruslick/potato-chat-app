import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInputs } from '../../../../../5_entities/auth-entities';
import { FormStyled, Loader, authFirebase, firestoreApp } from '../../../../../6_shared';
import { Button } from '../../../../../6_shared/ui/button/button.component';
import { Input } from '../../../../../6_shared/ui/input/input.component';

import { doc, updateDoc } from 'firebase/firestore';
import { useIdToken, useUpdateProfile } from 'react-firebase-hooks/auth';
import { deleteUser } from 'firebase/auth';
import { globalTheme } from '../../../../../6_shared/lib/global.theme';

export const UsernameFormComponent: FC = () => {
  const [values, handleChange] = useInputs({
    username: ''
  });

  const navigate = useNavigate();

  const [updateProfile, updating, error] = useUpdateProfile(authFirebase);
  const [user, loading] = useIdToken(authFirebase);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile({
      displayName: values.username
    }).then(() => {
      if (!user) throw new Error('No user');

      updateDoc(doc(firestoreApp, 'users', user.uid), {
        displayName: values.username
      }).catch(() => {
        if (!user) throw new Error('No user');
        deleteUser(user);
        throw new Error('Register error');
      });
      navigate(0);
    });
  };

  if (error) throw new Error(error.message);

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          label={'Username:'}
          value={values.username}
          onChange={handleChange}
          id='username'
          name='username'
          type='username'
          placeholder='Enter username'
        />
        <Button
          type='submit'
          width='250px'
          height='50px'
          backgroundColor={globalTheme.colors.primary.darkOrange}
        >
          Continue
        </Button>
      </FormStyled>
      <Loader isVisible={updating && loading} />
    </>
  );
};
