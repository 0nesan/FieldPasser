import { configureStore } from '@reduxjs/toolkit'
import boardListDataSlice from './boardSlice/boardListDataSlice'

export const store = configureStore({
    reducer: {
        boardList: boardListDataSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch