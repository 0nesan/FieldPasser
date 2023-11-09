import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostList } from "../api/boardApi";

export const fetchBoardList = createAsyncThunk("board/fetchBoardListStatus", async (params: GET_BOARD_LIST_PARAMS_TYPES, thunkAPI) => {
  try {
    const page = params.page === 1;
    const response = await getPostList(params);
    return [response, response.last, page];
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

interface boardListDataSliceTypes {
  boardData: POST_TYPE[];
  status: string;
  lastPage: boolean;
  firstPage: boolean;
}

const initialState: boardListDataSliceTypes = {
  boardData: [],
  status: "idle",
  lastPage: false,
  firstPage: true,
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
      action.payload[2]
        ? (state.boardData = action.payload[0].content)
        : (state.boardData = [...state.boardData, ...action.payload[0].content]);
      state.lastPage = action.payload[1];
      state.status = "Complete";
    });
    builder.addCase(fetchBoardList.rejected, (state) => {
      state.status = "Failed";
    });
  },
});

export default mainBoardListSlice.reducer;
