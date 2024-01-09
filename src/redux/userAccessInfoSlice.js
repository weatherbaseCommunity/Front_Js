import { createSlice } from "@reduxjs/toolkit";

export const userAccessInfoSlice = createSlice({
  name: 'userAccessInfo',
  initialState: {
    IPv4     : "",
    country  : "",
    city     : "",
    latitude : 0,  // 위도
    longitude: 0,  // 경도
    weather  : "",
    season   : "Spring", // 계절
    timezone : 0,   // 시간대(오전 오후 밤 새벽)
    gradation: ""
  },
  reducers: {
    updateInfo(state, action) {
      state.IPv4      = action.payload.IPv4;
      state.country   = action.payload.country_name;
      state.city      = action.payload.city;
      state.latitude  = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
    initialization(state) {
      state.IPv4      = "";
      state.country   = "";
      state.city      = "";
      state.latitude  = 0;
      state.longitude = 0;
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

export const { updateInfo, initialization, setWeather, setSeason, setTimezone, setGradation } = userAccessInfoSlice.actions
export default userAccessInfoSlice.reducer