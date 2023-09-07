import { combineReducers } from "@reduxjs/toolkit";
import { messagesSlice } from "../../5_entities/message";

export const rootReducer = combineReducers({
	[messagesSlice.name]: messagesSlice.reducer,
});
