import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Models } from "appwrite";



interface AuthState {
    status : boolean
    userData : Models.User<Models.Preferences> | null
}

const initialState: AuthState = {
    status: false,
    userData: null,
}

const logIn = (state : AuthState , action : PayloadAction<Models.User<Models.Preferences>>)=>{
    state.status = true
    state.userData = action.payload
}
const logOut = (state : AuthState)=>{
    state.status = false
    state.userData = null
}

const authSlice = createSlice({
    name: "slice_auth",
    initialState : initialState,
    reducers : {
        logIn,
        logOut
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
