import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    inc: (state) => {(state.value += 1)},
    dec: (state) => {(state.value -= 1)},
    incByValue:(state,action)=>{(state.value+=action.payload)}
  },
});

export const {inc,dec,incByValue}=counterSlice.actions

export default counterSlice.reducer