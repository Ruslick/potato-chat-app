import React, { FC } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useInputs } from '../../../../../5_entities/auth-entities';
import { FormStyled, Loader, authFirebase } from '../../../../../6_shared';
import { Input } from '../../../../../6_shared/ui/input/input.component';
import { Button } from '../../../../../6_shared/ui/button/button.component';

export const LoginFormComponent: FC = () => {
  const [values, handleChange] = useInputs({ email: '', password: '' });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signInWithEmailAndPassword, _, loading, error] =
    useSignInWithEmailAndPassword(authFirebase);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(values.email, values.password);
  };

  if (error) throw new Error(error.message);

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <label htmlFor='email'>
          <span>Email:</span>
        </label>
        <Input
          value={values.email}
          onChange={handleChange}
          id='email'
          name='email'
          type='email'
          placeholder='email'
        />
        <label htmlFor='password'>
          <span>Password:</span>
        </label>
        <Input
          value={values.password}
          onChange={handleChange}
          id='password'
          name='password'
          type='password'
          placeholder='password'
        />
        <Button type='submit'>Sign in</Button>
      </FormStyled>
      <Loader isVisible={loading} />
    </>
  );
};
