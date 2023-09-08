import { FC } from "react";
import { Link } from "react-router-dom";
import { AuthForm } from "../../../5_entities/auth";

export const RegisterForm: FC = () => {
	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>,
		email: string,
		pass: string
	) => {
		e.preventDefault();
		console.log(email, pass);
	};

	return (
		<>
			<AuthForm variant="register" onSubmit={handleSubmit} />
			<p>
				Alredy have an account ? <Link to={"/login"}>Sign in</Link>
			</p>
		</>
	);
};
