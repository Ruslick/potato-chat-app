import { FC, useState } from "react";
import { FormStyled } from "./auth-form.styled";
import { IResetFormProps } from "../model/types";

export const ResetFormComponent: FC<IResetFormProps> = ({
	onSubmit,
}) => {
	const [email, setEmail] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	return (
		<FormStyled onSubmit={(e) => onSubmit(e, email)}>
			<input
				value={email}
				onChange={handleChange}
				name="email"
				type="email"
				placeholder="email"
			/>
			<button type="submit">Send</button>
		</FormStyled>
	);
};
