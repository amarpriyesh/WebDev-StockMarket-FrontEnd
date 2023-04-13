import * as authService from "../services/auth-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials) => {
        return await authService.login(credentials);
    }
);

export const googleLoginThunk = createAsyncThunk(
    "user/login",
    async (user) => {
        return await authService.googleLogin(user);
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