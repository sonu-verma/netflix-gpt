import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import moviesSlice from './moviesSlice'
import configSlice from './configSlice'
import gptSlice from './gptSlice'
const appStore  = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        config: configSlice,
        gpt: gptSlice
    }
})

export default appStore