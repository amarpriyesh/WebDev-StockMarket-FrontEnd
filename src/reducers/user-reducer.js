import { createSlice } from "@reduxjs/toolkit";
import {
  findAllUsersThunk,
} from "../thunks/user-thunks";
import {
    loginThunk,
    logoutThunk,
    registerThunk,
    profileThunk,
    googleLoginThunk
} from "../thunks/auth-thunks";
import {findUserById} from "../services/user-service";
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
        [googleLoginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
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
