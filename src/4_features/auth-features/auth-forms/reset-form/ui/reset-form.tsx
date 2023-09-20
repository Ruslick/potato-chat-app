import { FC, useState } from "react";
import { FormStyled } from "../../../../../6_shared/ui/form/form.styled";
import { Button, Input, Loader, authFirebase } from "../../../../../6_shared";
import { useInputs } from "../../../../../5_entities/auth-entities";

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const ResetFormComponent: FC = () => {
  const [values, handleChange] = useInputs({ email: "" });

  const navigate = useNavigate();

  const [isSent, setIsSent] = useState(false);

  const [sendPasswordResetEmail, loading, error] =
    useSendPasswordResetEmail(authFirebase);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordResetEmail(values.email).then(() => {
      setIsSent(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    });
  };

  if (error) throw new Error(error.message);

  if (isSent && !loading && !error) {
    return "successfully sent";
  }

  return (
    <>
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
      <Loader isVisible={loading} />
    </>
  );
};
