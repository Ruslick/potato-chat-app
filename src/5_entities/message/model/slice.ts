import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface MessagesState {
	messages: MessageDto[];
}

// Define the initial state using that type
const initialState: MessagesState = {
	messages: [],
};

export const messagesSlice = createSlice({
	name: "messages",

	initialState,
	reducers: {},
	// extraReducers: (builder) => {
	// 	// builder.addCase()
	// }
});

export const selectMessages = (state: RootState) => state.messages.messages;
