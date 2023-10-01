import { FC } from 'react';
import { Input } from '../../../../6_shared/ui/input/input.component';
import { Button } from '../../../../6_shared/ui/button/button.component';
import { FormStyled, Loader, useInputs } from '../../../../6_shared';
import { useAddContact } from '../../../../5_entities/chats-entities';

export const AddContactForm: FC = () => {
  const [values, handleChange, clear] = useInputs({ search: '' });
  const { setContact, error, loading } = useAddContact();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContact(values.search);
    clear();
  };
  if (error) throw new Error(error);

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          placeholder='Enter username or email'
          name='search'
          value={values.search}
          onChange={handleChange}
          type='text'
        />
        <Button type='submit'>Add</Button>
      </FormStyled>
      <Loader isVisible={loading} />
    </>
  );
};
