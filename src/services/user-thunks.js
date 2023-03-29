import {createAsyncThunk} from "@reduxjs/toolkit";
import * as userService from "./user-service";

export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials) => {
        return await userService.login(credentials);
    }
);

export const findAllUsersThunk = createAsyncThunk(
    "user/findAllUsers",
    async () => {
        return await userService.findAllUsers();
    }
);

export const logoutThunk = createAsyncThunk("user/logout", async () => {
    return await userService.logout();
});

export const profileThunk = createAsyncThunk("user/profile", async () => {
    return await userService.profile();
});

export const registerThunk = createAsyncThunk(
    "user/register",
    async (credentials) => {
        return await userService.register(credentials);
    }
);

export const deleteUserThunk = createAsyncThunk(
    "user/deleteUser",
    async (userId) => {
        return await userService.deleteUser(userId);
    }
);
