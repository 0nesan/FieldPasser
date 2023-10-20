import { configureStore } from "@reduxjs/toolkit";
import boardListDataSlice from "./boardListDataSlice";
import modalStateSlice from "./modalStateSlice";

export const store = configureStore({
  reducer: {
    boardList: boardListDataSlice,
    modalState: modalStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
