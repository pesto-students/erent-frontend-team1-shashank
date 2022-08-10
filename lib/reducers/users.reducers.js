import { createSlice } from "@reduxjs/toolkit";

import AuthServices from "@services/AuthServices";

const initialState = {
    token: null,
    userData: {},
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
        logout: (state) => {
            state.token = null;
            AuthServices.logout();
            localStorage.clear();
        },
    },
});

export const { addToken, clearToken, logout } = usersSlice.actions;
export default usersSlice.reducer;
