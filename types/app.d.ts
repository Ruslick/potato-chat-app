declare global {
  declare type RootState = import('../src/1_app/store/init-store').RootState;

  declare type AppDispatch = import('../src/1_app/store/init-store').AppDispatch;
}

export {};
