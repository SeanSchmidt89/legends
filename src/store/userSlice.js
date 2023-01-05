import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  users: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initalState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { getUsers } = userSlice.actions;

export default userSlice.reducer;
