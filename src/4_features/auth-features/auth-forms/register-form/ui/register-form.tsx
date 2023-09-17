import { FC } from "react";
import { FormStyled, authFirebase } from "../../../../../6_shared";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useInputs } from "../../../../../5_entities/auth-entities/auth";
import Button from "../../../../../6_shared/ui/button/button.component";
import Input from "../../../../../6_shared/ui/input/input.component";

export const RegisterFormComponent: FC = () => {
  const [values, handleChange] = useInputs({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(authFirebase, values.email, values.password);
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
