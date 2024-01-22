import { createSlice } from "@reduxjs/toolkit";

export const userAccessInfoSlice = createSlice({
  name: 'userAccessInfo',
  initialState: {
    weather  : "",
    season   : "Spring", // 계절
    timezone : 0,   // 시간대(오전 오후 밤 새벽)
    gradation: ""
  },
  reducers: {
    initialization(state) {
      state.weather   = "";
      state.season    = "";
      state.timezone  = "";
      state.gradation = "";
    },
    setWeather(state, action) {
      state.weather = action.payload;
    },
    setSeason(state, action) {
      state.season = action.payload;
    },
    setTimezone(state, action) {
      state.timezone = action.payload;
    },
    setGradation(state, action) {
      state.gradation = action.payload;
    }
  }
})

export const { initialization, setWeather, setSeason, setTimezone, setGradation } = userAccessInfoSlice.actions
export default userAccessInfoSlice.reducer