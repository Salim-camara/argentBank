// STORE
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../reducers/RootReducer";
export const STORE = configureStore({
  reducer: RootReducer,
  devTools: true,
});

// SERVER URL
export const SERVER_BASE_URL = "http://localhost:3001/api/v1";
