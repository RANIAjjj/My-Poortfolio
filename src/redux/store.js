import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./slices/themeSlice"
import {themeMiddelware} from './middleware'

const store = configureStore({
    reducer:{
        theme : themeReducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(themeMiddelware)
    }
})

export default store;