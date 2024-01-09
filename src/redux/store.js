import { configureStore } from "@reduxjs/toolkit";
import userAccessInfoReducer from "./userAccessInfoSlice";
import userSignInReducer from "./userSignInSlice";

export default configureStore({
  reducer: {
    userAccessInfo: userAccessInfoReducer,
    userSignIn: userSignInReducer,
  },
});