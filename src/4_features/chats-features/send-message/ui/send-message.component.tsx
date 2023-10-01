import { FC } from 'react';
import { useSandMessage } from '../../../../5_entities/chats-entities';
import { Input } from '../../../../6_shared/ui/input/input.component';
import { useInputs } from '../../../../6_shared';

export const SendMessageComponent: FC = () => {
  const { setMessage } = useSandMessage();
  const [values, handleChange, clear] = useInputs({ newMessage: '' });

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(values.newMessage);
    clear();
  };
  return (
    <form onSubmit={handleSend}>
      <Input
        name='newMessage'
        value={values.newMessage}
        onChange={handleChange}
        placeholder='Enter your message'
        type='text'
      />
      <button type='submit' disabled={!values.newMessage}>
        Send
      </button>
    </form>
  );
};
