import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../slices/orderSlice";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    order: orderReducer,
  },
});
