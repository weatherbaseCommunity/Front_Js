import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const userAccessInfoSlice = createSlice({
  name: 'userAccessInfo',
  initialState: {
    IPv4     : "",
    country  : "",
    city     : "",
    latitude : 0, // 위도
    longitude: 0, // 경도
    weather  : ""
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
      state.IPv4      = ""
      state.country   = "";
      state.city      = "";
      state.latitude  = 0;
      state.longitude = 0;
    },
    setWeather(state, action) {
      state.weather = action.payload;
    }
  }
})

export const { updateInfo, initialization, setWeather } = userAccessInfoSlice.actions
export default userAccessInfoSlice.reducer