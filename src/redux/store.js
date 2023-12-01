import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

<<<<<<< Updated upstream
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
=======
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


// state를 여기로 모아서 전역에서 사용할 수 있게 해줌
>>>>>>> Stashed changes
