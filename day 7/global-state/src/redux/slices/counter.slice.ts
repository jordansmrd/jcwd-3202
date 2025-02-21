/** @format */

import { createSlice } from "@reduxjs/toolkit";
// npm install @reduxjs/toolkit react-redux

interface ICounter {
  value: number;
}

interface ICounterAction {
  payload: number;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state: ICounter) => {
      state.value++;
    },
    decrement: (state: ICounter) => {
      state.value--;
    },
    incrementByAmount: (state: ICounter, action: ICounterAction) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
// npm install @reduxjs/toolkit react-redux
