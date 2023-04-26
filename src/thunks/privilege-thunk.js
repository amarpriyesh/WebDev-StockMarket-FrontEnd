import {createAsyncThunk} from "@reduxjs/toolkit";
import * as privilegeService from "../services/privilege-service";

export const getPrivilege = createAsyncThunk(
    "user/privilege",
    async (userID) => {
        return await privilegeService.getPrivilege(userID)
    }
);