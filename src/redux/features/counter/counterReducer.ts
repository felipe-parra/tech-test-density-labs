import type { PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "./counterSlice";

export default function CounterReducer() {
  return {
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  };
}
