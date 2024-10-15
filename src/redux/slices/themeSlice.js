import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem('theme') || 'light'

const initialState ={
    mode : initialTheme ,
}

const themeSlice = createSlice({
    name:'theme',
    initialState,

    // Actions => function(num)
    reducers:{
        toggleTheme : (state)=>{
            state.mode = state.mode === 'light' ? 'dark' : 'light' ;
        }
    }
})

export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer