import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userAccessInfoReducer from "./userAccessInfoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    userAccessInfo: userAccessInfoReducer,
  },
});