import {createAsyncThunk} from "@reduxjs/toolkit";
import * as userService from "../services/user-service";
import {findUserById} from "../services/user-service";




export const findAllUsersThunk = createAsyncThunk(
    "user/findAllUsers",
    async () => {
        return await userService.findAllUsers();
    }
);

export const updateUserThunk = createAsyncThunk(
    "user/updateUser",
    async (user) => {
        return await userService.updateUser(user);
    }
);

export const deleteUserThunk = createAsyncThunk(
    "user/deleteUser",
    async (userId) => {
        return await userService.deleteUser(userId);
    }
);

export const findUserByIdThunk = createAsyncThunk(
    "user/findUserById",
    async (userId) => {
        return await userService.findUserById(userId);
    }
);



