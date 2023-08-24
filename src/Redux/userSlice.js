import { createSlice } from "@reduxjs/toolkit";

const intiState = {
    userIsLogin: false,
    uid: null,
    userEmail: null
}

export const userSlice = createSlice({
    name : "userSlice",
    initialState: intiState,
    reducers:{
        onUserLogin : (state,action)=>{
            // console.log("redux ", action.payload)
            state.userIsLogin = action.payload.userIsLogin,
            state.uid = action.payload.uid,
            state.userEmail = action.payload.userEmail
        },
        onUserLogout : (state, action)=>{
            state.userIsLogin = false
            state.uid = null
            state.userEmail = null
        }
    }
})

export default userSlice.reducer;
export const { onUserLogin, onUserLogout } = userSlice.actions;