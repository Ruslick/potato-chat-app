import { useState } from "react";

export const useInputs: <T>(
  initValues: T,
) => [T, (e: React.ChangeEvent<HTMLInputElement>) => void] = (initValues) => {
  const [values, setValues] = useState<typeof initValues>(initValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChange];
};
