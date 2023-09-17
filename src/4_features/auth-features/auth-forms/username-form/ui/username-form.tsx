import { FC } from "react";
import { FormStyled, authFirebase } from "../../../../../6_shared";
import { updateProfile } from "firebase/auth";
import { useInputs } from "../../../../../5_entities/auth-entities/auth";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../6_shared/ui/button/button.component";
import Input from "../../../../../6_shared/ui/input/input.component";

export const UsernameFormComponent: FC = () => {
  const [values, handleChange] = useInputs({
    username: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // updater(authFirebase, { displayName: values.username })
    if (!authFirebase.currentUser) throw new Error("No user");
    updateProfile(authFirebase.currentUser, {
      displayName: values.username,
    }).then(() => {
      navigate(0);
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input
        value={values.username}
        onChange={handleChange}
        name="username"
        type="username"
        placeholder="username"
      />
      <Button type="submit">Send</Button>
    </FormStyled>
  );
};
