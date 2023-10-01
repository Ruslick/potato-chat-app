import { useState } from 'react';

export const useInputs: <T>(
  initValues: T
) => [T, (e: React.ChangeEvent<HTMLInputElement>) => void, VoidFunction] = (initValues) => {
  const [values, setValues] = useState<typeof initValues>(initValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setValues(initValues);
  };

  return [values, handleChange, clear];
};
