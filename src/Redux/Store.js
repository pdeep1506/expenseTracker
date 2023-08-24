import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from './settingsSlice.js'
import userSlice from "./userSlice.js";

export const store = configureStore({
    reducer:{
       settingsValue: settingsSlice,
        userValue: userSlice 
    }
})