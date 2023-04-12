import {createAsyncThunk} from "@reduxjs/toolkit";
import * as userService from "../services/user-service";
import * as authService from "../services/auth-service";

export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials) => {
        return await authService.login(credentials);
    }
);

export const findAllUsersThunk = createAsyncThunk(
    "user/findAllUsers",
    async () => {
        return await userService.findAllUsers();
    }
);

export const logoutThunk = createAsyncThunk("user/logout", async () => {
    return await authService.logout();
});

export const profileThunk = createAsyncThunk("user/profile", async () => {
    return await authService.profile();
});

export const registerThunk = createAsyncThunk(
    "user/register",
    async (credentials) => {
        return await authService.register(credentials);
    }
);

export const deleteUserThunk = createAsyncThunk(
    "user/deleteUser",
    async (userId) => {
        return await userService.deleteUser(userId);
    }
);
