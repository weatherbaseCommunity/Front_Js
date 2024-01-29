import { createSlice } from "@reduxjs/toolkit";

export const userAccessInfoSlice = createSlice({
  name: 'userAccessInfo',
  initialState: {
    weather  : "weather",
    country  : "country",
    season   : "Spring", // 계절
    timezone : 0,   // 시간대(오전 오후 밤 새벽)
    gradation: ""
  },
  reducers: {
    setWeather(state, action) {
      state.weather = action.payload;
    },
    setCountry(state, action) {
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

export const { setWeather, setCountry, setSeason, setTimezone, setGradation } = userAccessInfoSlice.actions
export default userAccessInfoSlice.reducer