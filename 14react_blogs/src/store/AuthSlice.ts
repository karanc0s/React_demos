import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthState, TUser} from "../types";


const initialState: AuthState = {
    status : false,
    userData : null,
}

const logIn = (state : AuthState , action: PayloadAction<TUser>)=>{
    state.status = true;
    state.userData = action.payload;
}
const logOut = (state : AuthState)=>{
    state.status = false
    state.userData = null
}

const authSlice = createSlice({
    name: "Auth_Slice",
    initialState: initialState,

    reducers:{
        logIn,
        logOut,
    }
})

export const AuthActions = authSlice.actions
export const AuthReducer = authSlice.reducer