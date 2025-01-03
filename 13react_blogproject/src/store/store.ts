import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./AuthSlice.ts";

const store = configureStore({
    reducer : {
        authReducers : authReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch