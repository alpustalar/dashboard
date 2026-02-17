"use client";

import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {},
});

export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;
