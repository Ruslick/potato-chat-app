import { signInWithEmailAndPassword } from "firebase/auth";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AuthForm } from "../../../5_entities/auth";
import { authFirebase } from "../../../6_shared";

export const LoginForm: FC = () => {
	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>,
		email: string,
		pass: string
	) => {
		e.preventDefault();
		signInWithEmailAndPassword(authFirebase, email, pass);
	};

	return (
		<>
			<AuthForm variant="login" onSubmit={handleSubmit} />
			<p>
				Not a member yet? <Link to={"/register"}>Sign up</Link>
			</p>
		</>
	);
};
