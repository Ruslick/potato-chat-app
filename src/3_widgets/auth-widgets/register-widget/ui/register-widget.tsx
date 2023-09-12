import { FC } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../../../../6_shared";
import {
	AuthFormContainer,
	TSubmitAuthFunction,
} from "../../../../5_entities/auth";

export const RegisterWidget: FC = () => {
	const handleSubmit: TSubmitAuthFunction = (e, email, pass) => {
		e.preventDefault();
		console.log(email, pass);
		createUserWithEmailAndPassword(authFirebase, email, pass);
	};

	return (

			<AuthFormContainer variant="register" onSubmit={handleSubmit} />

	);
};
