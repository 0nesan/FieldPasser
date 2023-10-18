import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPostList } from "../../api/boardApi";

export const fetchBoardList = createAsyncThunk(
  'board/fetchBoardListStatus',
  async (params : POST_LIST_PARAMS_TYPES, thunkAPI) => {
    try {
      const response = await getPostList(params);
      return [response, params.page]
    }catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const initialState = {
  boardData : [],
  status: 'Failed'
}

const mainBoardListSlice = createSlice({
  name: 'boardList',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchBoardList.pending, (state) => {
      state.status = 'Loading'
    })
    builder.addCase(fetchBoardList.fulfilled, (state, action) => {
      action.payload[1] === 1 ? state.boardData = action.payload[0] : state.boardData = [...state.boardData].concat(action.payload[0])
      state.status = 'Complete'
    })
    builder.addCase(fetchBoardList.rejected, (state) => {
      state.status = 'Failed'
    })
  },
})

export default mainBoardListSlice.reducer