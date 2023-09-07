// import Parse from "parse";
import { createAsyncThunk } from "@reduxjs/toolkit";




// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchMessages = createAsyncThunk<any>(
  "messages/fetchMessages",
  async () => {
    // const Message = Parse.Object.extend("Messages");

    // const query = new Parse.Query(Message);
    // query.findAll().then((results) => {
    //   console.log(results);
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   return results as any
      
    // })
  }
)