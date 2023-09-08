import React, { FC, useState } from "react";
import { FormStyled } from "./auth-form.styled";

interface FormProps {
	title: string;
	onSubmit: (
		e: React.FormEvent<HTMLFormElement>,
		email: string,
		pass: string
	) => void;
	buttonText: string;
}

export const AuthFormComponent: FC<FormProps> = ({
	title,
	onSubmit,
	buttonText,
}) => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "password") {
			setPass(e.target.value);
		}
	};
	return (
		<>
			<h1>{title}</h1>

			<FormStyled
				onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
					onSubmit(e, email, pass)
				}
			>
				<input
					value={email}
					onChange={handleChange}
					name="email"
					type="email"
					placeholder="email"
				/>
				<input
					value={pass}
					onChange={handleChange}
					name="password"
					type="password"
					placeholder="password"
				/>
				<button type="submit">{buttonText}</button>
			</FormStyled>
		</>
	);
};
