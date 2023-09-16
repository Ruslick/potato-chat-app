import { FC } from "react";
import { FormStyled, authFirebase } from "../../../../../6_shared";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useInputs } from "../../../../../5_entities/auth-entities/auth";

export const RegisterFormComponent: FC = () => {
	const [values, handleChange] = useInputs({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createUserWithEmailAndPassword(authFirebase, values.email, values.password);
	};
	return (
		<FormStyled onSubmit={handleSubmit}>
			<input
				value={values.email}
				onChange={handleChange}
				name="email"
				type="email"
				placeholder="email"
			/>
			<input
				value={values.password}
				onChange={handleChange}
				name="password"
				type="password"
				placeholder="password"
			/>
			<button type="submit">Sign in</button>
		</FormStyled>
	);
};
