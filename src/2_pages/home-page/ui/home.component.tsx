import { FC } from "react";
import { Messages } from "../../../3_widgets/messages";

export const HomeComponent: FC = () => {
	return (
		<div>
			<h1>Home page</h1>
			<Messages/>
		</div>
	);
};
