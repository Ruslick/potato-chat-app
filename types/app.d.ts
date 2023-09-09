declare global {
	declare type RootState = import("./../src/1_app/store/initStore").RootState;

	declare type AppDispatch =
		import("./../src/1_app/store/initStore").AppDispatch;
}

export {};
