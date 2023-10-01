import { useEffect, useState } from 'react';
import { addContact } from './add-contact.helper';

export const useAddContact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState<string | null>(null);

  useEffect(() => {
    if (contact) {
      setLoading(true);

      addContact(contact)
        .then(() => {
          setSuccess(true);
        })
        .catch((err: Error) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [contact]);

  return { setContact, loading, error, success };
};
