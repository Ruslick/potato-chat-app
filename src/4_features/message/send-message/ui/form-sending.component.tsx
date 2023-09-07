import { FC } from "react";

export const FromSending: FC = () => {
	return (
		<form>
			<input type="text" placeholder="user" />
			<input type="text" placeholder="message" />
			<button>send</button>
		</form>
	);
};
