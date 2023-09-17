import { FC } from "react";
import { FormStyled } from "../../../../../6_shared/ui/form/form.styled";
import { sendPasswordResetEmail } from "firebase/auth";
import { authFirebase } from "../../../../../6_shared";
import { useInputs } from "../../../../../5_entities/auth-entities/auth";

export const ResetFormComponent: FC = () => {
	const [values, handleChange] = useInputs({ email: "" });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		sendPasswordResetEmail(authFirebase, values.email);
		
	}

	return (
		<FormStyled onSubmit={handleSubmit}>
			<input
				value={values.email}
				onChange={handleChange}
				name="email"
				type="email"
				placeholder="email"
			/>
			<button type="submit">Send</button>
		</FormStyled>
	);
};
