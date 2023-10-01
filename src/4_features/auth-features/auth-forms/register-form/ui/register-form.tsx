import { doc, setDoc } from 'firebase/firestore';
import { FC } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { createUserFromAuthUser } from '../../../../../5_entities/auth-entities';
import { FormStyled, Loader, authFirebase, firestoreApp, useInputs } from '../../../../../6_shared';
import { Button } from '../../../../../6_shared/ui/button/button.component';
import { Input } from '../../../../../6_shared/ui/input/input.component';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const RegisterFormComponent: FC = () => {
  const navigate = useNavigate();
  const [values, handleChange] = useInputs({
    username: '',
    email: '',
    password: ''
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [createUser, _, loading, error] = useCreateUserWithEmailAndPassword(authFirebase);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(values.email, values.password).then(async (cred) => {
      if (!cred) throw new Error('No user');
      await updateProfile(cred.user, {
        displayName: values.username
      });
      await setDoc(doc(firestoreApp, 'users', cred.user.uid), createUserFromAuthUser(cred.user));
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
          name='username'
          type='username'
          placeholder='username'
          id='username'
        />
        <Input
          label={'Email:'}
          value={values.email}
          onChange={handleChange}
          name='email'
          type='email'
          placeholder='email'
          id='email'
        />
        <Input
          label={'Password:'}
          value={values.password}
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='password'
          id='password'
        />
        <Button type='submit'>Sign up</Button>
      </FormStyled>
      <Loader isVisible={loading} />
    </>
  );
};
