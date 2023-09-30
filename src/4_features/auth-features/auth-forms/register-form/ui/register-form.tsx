import { doc, setDoc } from 'firebase/firestore';
import { FC } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { createUserFromAuthUser, useInputs } from '../../../../../5_entities/auth-entities';
import { FormStyled, Loader, authFirebase, firestoreApp } from '../../../../../6_shared';
import { Button } from '../../../../../6_shared/ui/button/button.component';
import { Input } from '../../../../../6_shared/ui/input/input.component';
import { globalTheme } from '../../../../../6_shared/lib/global.theme';

export const RegisterFormComponent: FC = () => {
  const [values, handleChange] = useInputs({
    email: '',
    password: ''
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [createUser, _, loading, error] = useCreateUserWithEmailAndPassword(authFirebase);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(values.email, values.password).then((cred) => {
      if (!cred) throw new Error('No user');

      setDoc(doc(firestoreApp, 'users', cred.user.uid), createUserFromAuthUser(cred.user));
    });
  };

  if (error) throw new Error(error.message);

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        {/* <label htmlFor='email'>
          <span>Email:</span>
        </label> */}
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
        <Button
          type='submit'
          width='250px'
          height='50px'
          backgroundColor={globalTheme.colors.primary.darkOrange}
        >
          Sign up
        </Button>
      </FormStyled>
      <Loader isVisible={loading} />
    </>
  );
};
