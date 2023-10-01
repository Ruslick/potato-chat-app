import { doc } from 'firebase/firestore';
import { FC } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router-dom';
import { chatConverter } from '../../../../5_entities/chats-entities/chats/model/chat.converter';
import { Loader, authFirebase, firestoreApp } from '../../../../6_shared';
import { SendMessageFeature } from '../../../../4_features/chats-features';

export const ChatPage: FC = () => {
  const currentUser = authFirebase.currentUser;

  if (!currentUser) throw new Error('No user');
  const { cid } = useParams();
  if (!cid) throw new Error('No cid');

  const [chatRes, loading, error] = useDocument(
    doc(firestoreApp, 'chats', cid).withConverter(chatConverter)
  );

  if (loading) return <Loader isVisible={loading} />;
  if (error) throw new Error(error.message);
  const chat = chatRes?.data();

  return (
    chat && (
      <div>
        <div>{chat.users.find((user) => user.uid !== currentUser.uid)?.displayName}</div>
        <div>
          {chat.messages.map((messageWrapper) => (
            <p key={messageWrapper.date.toString()}>
              {messageWrapper.sender.displayName}: {messageWrapper.message}
            </p>
          ))}
        </div>
        <hr />
        <SendMessageFeature />
      </div>
    )
  );
};
