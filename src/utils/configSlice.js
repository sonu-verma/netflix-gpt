import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        gpt: false,
        lang: "en"
    },
    reducers: {
        toggleGpt: (state, action) => {
            state.gpt = !state.gpt
        },
        switchLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
});

export const  { toggleGpt, switchLanguage } = configSlice.actions
export default configSlice.reducer