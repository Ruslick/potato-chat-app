import { signInWithEmailAndPassword } from "firebase/auth";
import { FC } from "react";
import { authFirebase } from "../../../../6_shared";
import {
	AuthFormContainer,
	TSubmitAuthFunction,
} from "../../../../5_entities/auth";

export const LoginWidget: FC = () => {
	const handleSubmit: TSubmitAuthFunction = (e, email, pass) => {
		e.preventDefault();
		signInWithEmailAndPassword(authFirebase, email, pass);
	};

	return <AuthFormContainer variant="login" onSubmit={handleSubmit} />;
};
