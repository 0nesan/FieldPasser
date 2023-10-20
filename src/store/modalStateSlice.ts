import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalStateTypes {
  searchModal: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

interface modalStateType {
  modalState: modalStateTypes;
}

const initialState: modalStateType = {
  modalState: {
    searchModal: false,
  },
};

const modalStateSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    modalToggle: (state, action: PayloadAction<string>) => {
      state.modalState[action.payload] = !state.modalState[action.payload];
    },
  },
});

export default modalStateSlice.reducer;
export const { modalToggle } = modalStateSlice.actions;
