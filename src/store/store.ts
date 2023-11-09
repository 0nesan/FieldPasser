import { configureStore } from "@reduxjs/toolkit";
import boardListDataSlice from "./boardListDataSlice";
import modalStateSlice from "./modalStateSlice";
import boardListParamsSlice from "./boardListParamsSlice";

export const store = configureStore({
  reducer: {
    boardList: boardListDataSlice,
    modalState: modalStateSlice,
    boardListParams: boardListParamsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
