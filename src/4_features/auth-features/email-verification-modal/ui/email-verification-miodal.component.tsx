import { FC } from 'react';
import { getAuth } from 'firebase/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Button } from '../../../../6_shared/ui/button/button.component';
import { Modal, authFirebase, useModal } from '../../../../6_shared';
import { globalTheme } from '../../../../6_shared/lib/global.theme';

export const EmailVerificationModal: FC = () => {
  const [sendEmailVerification] = useSendEmailVerification(authFirebase);
  const user = getAuth().currentUser;
  const [isVisible, toggleModal] = useModal(true);

  if (!user) throw new Error('No user');

  const sandVerificationHandle = () => {
    sendEmailVerification().then(() => {
      toggleModal();
    });
  };

  return (
    isVisible && (
      <Modal title='Email not verified' toggleModal={toggleModal}>
        <h1>Please verify your email: {user.email}</h1>
        <Button
          width='250px'
          height='50px'
          backgroundColor={globalTheme.colors.primary.darkOrange}
          onClick={sandVerificationHandle}
        >
          Send verification email
        </Button>
      </Modal>
    )
  );
};
