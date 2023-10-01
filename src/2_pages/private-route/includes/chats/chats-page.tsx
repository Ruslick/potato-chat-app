import { FC } from 'react';

import { Link } from 'react-router-dom';
import { useChats } from '../../../../5_entities/chats-entities';
import { Loader, authFirebase } from '../../../../6_shared';

export const ChatsPage: FC = () => {
  const currentUser = authFirebase.currentUser;
  if (!currentUser) throw new Error('No user');

  const [chats, loading, error] = useChats();

  if (error) throw new Error(error.message);

  return (
    <div>
      <h1>ChatsPage</h1>
      <ol>
        {chats.map((chat) => (
          <li key={chat.cid}>
            <Link to={`/chats/${chat.cid}`}>
              {chat.users.find((user) => user.uid !== currentUser.uid)?.displayName}
            </Link>
            <p>{chat.messages[chat.messages.length - 1]?.message}</p>
          </li>
        ))}
      </ol>
      <Loader isVisible={loading} />
    </div>
  );
};
