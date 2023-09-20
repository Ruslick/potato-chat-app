import { signOut } from "firebase/auth";
import { FC } from "react";
import { Button, authFirebase } from "../../../../6_shared";

export const Logout: FC = () => {
  // fix this: native signOut from firebase doesn't work
  const handleClick = () => {
    signOut(authFirebase);
  };

  return <Button onClick={handleClick}>Logout</Button>;
};
