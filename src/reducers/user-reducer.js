import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    registerThunk,
    profileThunk, findAllUsersThunk,
} from "../thunks/user-thunks";

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
            return state.currentUser;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = null;
        },
        [findAllUsersThunk.fulfilled]: (state,{payload}) => {
            state.allUsers = payload;
        }
    },
});

export default userSlice.reducer;
