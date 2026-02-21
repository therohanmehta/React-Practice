import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
  const fakeUser = [{ name: "rohan" }, { name: "jhonny" }];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return fakeUser;
});
