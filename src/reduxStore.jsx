import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './reduxSlice'


const store = configureStore({
  reducer: {
    counter:counterSlice
  },
});
export default store;
