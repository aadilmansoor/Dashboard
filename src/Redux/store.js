import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./slice/sharedSlice";
import authReducer from "./slice/authSlice"

const store = configureStore({
  reducer: {
    shared: sharedReducer,
    auth: authReducer
  },
});

export default store;
