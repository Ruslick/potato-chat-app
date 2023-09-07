import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../6_shared";
import {
	Message,
	fetchMessages,
	selectMessages,
} from "../../../5_entities/message";
import { FromSending } from "../../../4_features/message/send-message";

export const Messages: FC = () => {
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		dispatch(fetchMessages());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const messages = useAppSelector(selectMessages);
	const mapped = messages.map(({ user, message }) => (
		<Message user={user} message={message} />
	));

	return (
		<div>
			<FromSending />
			<h1>Current messages</h1>
			<ol>{mapped}</ol>
		</div>
	);
};
