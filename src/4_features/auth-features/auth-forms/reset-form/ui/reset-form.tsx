import { FC } from "react";
import { FormStyled } from "../../../../../6_shared/ui/form/form.styled";
import { sendPasswordResetEmail } from "firebase/auth";
import { authFirebase } from "../../../../../6_shared";
import { useInputs } from "../../../../../5_entities/auth-entities/auth";
import Button from "../../../../../6_shared/ui/button/button.component";
import Input from "../../../../../6_shared/ui/input/input.component";

export const ResetFormComponent: FC = () => {
  const [values, handleChange] = useInputs({ email: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordResetEmail(authFirebase, values.email);
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
      <Button type="submit">Send</Button>
    </FormStyled>
  );
};
