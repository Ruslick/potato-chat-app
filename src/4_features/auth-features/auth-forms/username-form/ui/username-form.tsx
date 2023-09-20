import { FC } from "react";
import { FormStyled, Loader, authFirebase } from "../../../../../6_shared";
import { useInputs } from "../../../../../5_entities/auth-entities";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../6_shared/ui/button/button.component";
import Input from "../../../../../6_shared/ui/input/input.component";

import { useUpdateProfile } from "react-firebase-hooks/auth";

export const UsernameFormComponent: FC = () => {
  const [values, handleChange] = useInputs({
    username: "",
  });

  const navigate = useNavigate();

  const [updateProfile, updating, error] = useUpdateProfile(authFirebase);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // updater(authFirebase, { displayName: values.username })
    if (!authFirebase.currentUser) throw new Error("No user");
    updateProfile({
      displayName: values.username,
    }).then(() => {
      navigate(0);
    });
  };

  if (error) throw new Error(error.message);

  return (
    <>
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
      <Loader isVisible={updating} />
    </>
  );
};
