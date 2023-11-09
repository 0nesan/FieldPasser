import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface boardListParamsTypes {
  boardListParams: BOARD_PARAMS_TYPE;
}

const initialState: boardListParamsTypes = {
  boardListParams: {},
};

const boardListParamsSlice = createSlice({
  name: "boardListParams",
  initialState,
  reducers: {
    boardListParams: (state, action: PayloadAction<BOARD_PARAMS_TYPE>) => {
      state.boardListParams = action.payload;
    },
  },
});

export default boardListParamsSlice.reducer;
export const { boardListParams } = boardListParamsSlice.actions;
