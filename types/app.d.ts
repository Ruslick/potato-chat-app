
declare global {

  export type MessageDto = {
    user: string,
    message: string
  }

  declare type RootState = import("./../src/1_app/store/initStore").RootState

  declare type AppDispatch = import("./../src/1_app/store/initStore").AppDispatch

  declare 

}




export {}