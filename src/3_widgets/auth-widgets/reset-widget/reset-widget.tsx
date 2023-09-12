import { FC } from "react";
import { TSubmitResetFunction } from "../../../5_entities/auth";
import { ResetFormComponent } from "../../../5_entities/auth/ui/reset-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { authFirebase } from "../../../6_shared";

export const ResetWidget: FC = () => {
	const handleSubmit: TSubmitResetFunction = (e, email) => {
		e.preventDefault();
		sendPasswordResetEmail(authFirebase, email);
	};

	return <ResetFormComponent onSubmit={handleSubmit} />;
};
