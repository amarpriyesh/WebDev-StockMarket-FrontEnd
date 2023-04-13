import {createAsyncThunk} from "@reduxjs/toolkit";
import * as viewsService from "./views-service";


export const findAllViewsThunk = createAsyncThunk(
    "views/findAllViews",
    async () => {
        return await viewsService.findAllViews();
    }
);

export const updateViewThunk =
    createAsyncThunk(
        'views/updateView',
        async (view) => {
            await viewsService.updateView(view);
        });
