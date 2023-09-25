import { FC } from 'react';

import { useInputs } from '../../../5_entities/auth-entities';
import { Button } from '../../../6_shared/ui/button/button.component';
import { Input } from '../../../6_shared/ui/input/input.component';
import { addContact } from '../lib/addContact';

export const SearchPage: FC = () => {
  const [values, handleChange] = useInputs({ search: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addContact(values.search);
  };

  return (
    <div>
      {/* {<Loader isVisible={loading} />} */}
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='Enter username or email'
          name='search'
          value={values.search}
          onChange={handleChange}
          type='text'
        />
        <Button type='submit'>Add</Button>
      </form>
    </div>
  );
};
