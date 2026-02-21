import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userAsyncThunk";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    users: [],
    loading: false,
    isError: false,
  },
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
    byValue: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
      state.isError = true;
    });
  },
});
export const { inc, dec, byValue } = counterSlice.actions;
export default counterSlice.reducer;
