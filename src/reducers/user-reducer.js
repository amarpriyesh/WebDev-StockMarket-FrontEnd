import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    registerThunk,
    profileThunk, findAllUsersThunk,
} from "../services/user-thunks";

const initialState = {
    currentUser: null,
    allUsers: [],
};
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [findAllUsersThunk.fulfilled]: (state,{payload}) => {
            state.allUsers = payload;
        }
    },
});

export default userSlice.reducer;
