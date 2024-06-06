import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "filter",
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter: (state, action) => ({
            ...state, name: action.payload,
        }),
    },
});

export const { changeFilter} = contactSlice.actions;

export default  contactSlice.reducer;