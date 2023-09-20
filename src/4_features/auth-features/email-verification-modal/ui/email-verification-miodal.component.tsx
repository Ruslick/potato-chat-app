import { FC } from "react";
import { Button, Modal, authFirebase, useModal } from "../../../../6_shared";

import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

export const EmailVerificationModal: FC = () => {
  const [sand] = useSendEmailVerification(authFirebase);
  const user = getAuth().currentUser;
  const [isVisible, toggleModal] = useModal(true);

  if (!user) throw new Error("No user");

  const sandVerificationHandle = () => {
    sand().then(() => {
      toggleModal();
    });
  };

  return (
    isVisible && (
      <Modal title="Email not verified" toggleModal={toggleModal}>
        <h1>Please verify your email: {user.email}</h1>
        <Button onClick={sandVerificationHandle}>
          Send verification email
        </Button>
      </Modal>
    )
  );
};
