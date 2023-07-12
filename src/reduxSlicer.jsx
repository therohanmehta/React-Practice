import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

export const counterSlice=createSlice({
    name:'counter1',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incByValue:(state,action)=>{
            state.value+=action.payload
        }
    }
})

export const {increment,decrement,incByValue}=counterSlice.actions

export default counterSlice.reducer