import { FC } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useInputs } from '../../../../../5_entities/auth-entities/auth';
import { FormStyled, Loader, authFirebase } from '../../../../../6_shared';
import { Button } from '../../../../../6_shared/ui/button/button.component';
import { Input } from '../../../../../6_shared/ui/input/input.component';

export const RegisterFormComponent: FC = () => {
  const [values, handleChange] = useInputs({
    email: '',
    password: ''
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [createUser, user, loading, error] = useCreateUserWithEmailAndPassword(authFirebase);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(values.email, values.password);
  };

  if (error) throw new Error(error.message);

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          value={values.email}
          onChange={handleChange}
          name='email'
          type='email'
          placeholder='email'
        />
        <Input
          value={values.password}
          onChange={handleChange}
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
