<<<<<<< Updated upstream
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

=======
import { createSlice } from "@reduxjs/toolkit";

const initiaState = {
  value: 0,
}

export const counterSlice = createSlice({
  name : 'counter',
  initiaState,
  reducers: {
    plus: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
  },
})

export const {plus, minus} = counterSlice.actions
>>>>>>> Stashed changes
export default counterSlice.reducer