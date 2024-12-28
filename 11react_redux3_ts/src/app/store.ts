import {configureStore} from "@reduxjs/toolkit";
import {todoSliceReducer} from "../features/TodoSlice.ts";

const store = configureStore({
    reducer: {
        todoReducer: todoSliceReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch

