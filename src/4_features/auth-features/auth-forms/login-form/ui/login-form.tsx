import React, { FC } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useInputs } from '../../../../../5_entities/auth-entities';
import { FormStyled, Loader, authFirebase } from '../../../../../6_shared';
import { Input } from '../../../../../6_shared/ui/input/input.component';
import { Button } from '../../../../../6_shared/ui/button/button.component';
import { globalTheme } from '../../../../../6_shared/lib/global.theme';

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
        <Input
          label={'Email:'}
          value={values.email}
          onChange={handleChange}
          id='email'
          name='email'
          type='email'
          placeholder='email'
        />
        <Input
          label={'Password:'}
          value={values.password}
          onChange={handleChange}
          id='password'
          name='password'
          type='password'
          placeholder='password'
        />
        <Button
          type='submit'
          backgroundColor={globalTheme.colors.primary.darkOrange}
          width='250px'
          height='50px'
          borderRadius='15px'
        >
          Sign in
        </Button>
      </FormStyled>
      <Loader isVisible={loading} />
    </>
  );
};
