import { configureStore } from "@reduxjs/toolkit";
import userAccessInfoReducer from "./userAccessInfoSlice";

export default configureStore({
  reducer: {
    userAccessInfo: userAccessInfoReducer,
  },
});