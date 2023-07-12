import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./reduxSlicer";

export const store=configureStore({
    reducer:{
        counter:counterSlice
    }
})