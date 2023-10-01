import { useEffect, useState } from 'react';
import { sendMessage } from './send-message';
import { useParams } from 'react-router-dom';

export const useSandMessage = () => {
  const { cid } = useParams();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (message === '') {
      setError(`You can't send an empty message`);
      return;
    }
    if (!cid) {
      setError(`Chat not found`);
      return;
    }
    if (message) {
      sendMessage(cid, message)
        .then(() => {
          setSuccess(true);
          setMessage(null);
          // ^  need for reload after send
        })
        .catch((err: Error) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [cid, message]);

  return { setMessage, loading, error, success };
};
