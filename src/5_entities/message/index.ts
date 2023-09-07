import { fetchMessages } from "./model/actions";
import { Message } from "./ui/message/message.component";
import {
	messagesSlice,
	selectMessages,
} from "../../5_entities/message/model/slice";

export { Message };
export { messagesSlice, selectMessages };
export { fetchMessages };
