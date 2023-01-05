import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";

const store = configureStore({
  reducer: { users: userSliceReducer },
});

export default store;
