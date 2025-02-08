import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        movieNames: null,
        movieResults: null
    },
    reducers: {
        addMovieResults: (state, action) => {
            const { movieNames, movieResult} = action.payload
            state.movieResults = movieResult
            state.movieNames = movieNames
        }
    }
})

export const { addMovieResults } = gptSlice.actions
export default gptSlice.reducer