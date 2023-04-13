import {createAsyncThunk} from "@reduxjs/toolkit";
import * as userService from "../services/user-service";




export const findAllUsersThunk = createAsyncThunk(
    "user/findAllUsers",
    async () => {
        return await userService.findAllUsers();
    }
);



export const deleteUserThunk = createAsyncThunk(
    "user/deleteUser",
    async (userId) => {
        return await userService.deleteUser(userId);
    }
);
