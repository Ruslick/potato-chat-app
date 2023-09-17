import React, { FC } from "react";
import { FormStyled, authFirebase } from "../../../../../6_shared";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useInputs } from "../../../../../5_entities/auth-entities/auth";
import Input from "../../../../../6_shared/ui/input/input.component";
import Button from "../../../../../6_shared/ui/button/button.component";

const initValues = { email: "", password: "" };

export const LoginFormComponent: FC = () => {
  const [values, handleChange] = useInputs(initValues);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(authFirebase, values.email, values.password);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input
        value={values.email}
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="email"
      />
      <Input
        value={values.password}
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="password"
      />
      <Button type="submit">Sign in</Button>
    </FormStyled>
  );
};
