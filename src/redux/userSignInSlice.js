import { createSlice } from "@reduxjs/toolkit";

export const userSignInSlice = createSlice({
  name: 'userSignIn',
  initialState: {
    isSignIn : false,
  },
  reducers: {
    setSignState(state, action) {
      state.isSignIn = action.payload;
    }
  }
})
export const { setSignState } = userSignInSlice.actions
export default userSignInSlice.reducer