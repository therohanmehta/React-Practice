import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userAsyncThunk";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    loading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action);
      state.users = [...action.payload];
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
      state.isError = true;
    });
  },
});
export default userSlice.reducer;
