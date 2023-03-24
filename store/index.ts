import { configureStore } from "@reduxjs/toolkit";
import wordsSlice from "./slices/wordsSlice";
export const store = configureStore({ reducer: { word: wordsSlice } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
