"use client";

import { combineReducers } from "redux";
import counterReducer from "./Features/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
