import { FC, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useInputs } from '../../../../../5_entities/auth-entities';
import { FormStyled } from '../../../../../6_shared/ui/form/form.styled';
import { Loader, authFirebase } from '../../../../../6_shared';
import { Button } from '../../../../../6_shared/ui/button/button.component';
import { Input } from '../../../../../6_shared/ui/input/input.component';
import { globalTheme } from '../../../../../6_shared/lib/global.theme';

export const ResetFormComponent: FC = () => {
  const [values, handleChange] = useInputs({ email: '' });

  const navigate = useNavigate();

  const [isSent, setIsSent] = useState(false);

  const [sendPasswordResetEmail, loading, error] = useSendPasswordResetEmail(authFirebase);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordResetEmail(values.email).then(() => {
      setIsSent(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    });
  };

  if (error) throw new Error(error.message);

  if (isSent && !loading && !error) {
    return 'successfully sent';
  }

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          label={'Email:'}
          value={values.email}
          onChange={handleChange}
          name='email'
          id='email'
          type='email'
          placeholder='email'
        />
        <Button
          type='submit'
          width='250px'
          height='50px'
          backgroundColor={globalTheme.colors.primary.darkOrange}
        >
          Reset
        </Button>
      </FormStyled>
      <Loader isVisible={loading} />
    </>
  );
};
