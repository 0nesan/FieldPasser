import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostList } from "../api/boardApi";

export const fetchBoardList = createAsyncThunk("board/fetchBoardListStatus", async (params: GET_BOARD_LIST_PARAMS_TYPES, thunkAPI) => {
  try {
    const response = await getPostList(params);
    return [response, params.params, response.last];
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

interface boardListDataSliceTypes {
  boardData: POST_TYPE[];
  status: string;
  params: BOARD_PARAMS_TYPE;
  lastPage: boolean;
}

const initialState: boardListDataSliceTypes = {
  boardData: [],
  status: "idle",
  params: {},
  lastPage: false,
};

const mainBoardListSlice = createSlice({
  name: "boardList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoardList.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchBoardList.fulfilled, (state, action) => {
      action.payload[2] === 1
        ? (state.boardData = action.payload[0].content)
        : (state.boardData = [...state.boardData, action.payload[0].content]);
      state.params = action.payload[1];
      state.status = "Complete";
      state.lastPage = action.payload[2];
    });
    builder.addCase(fetchBoardList.rejected, (state) => {
      state.status = "Failed";
    });
  },
});

export default mainBoardListSlice.reducer;
