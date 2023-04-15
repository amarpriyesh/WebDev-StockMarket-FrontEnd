import {createAsyncThunk} from "@reduxjs/toolkit";
import * as viewsService from "../services/views-service";


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

export const deleteViewThunk =
    createAsyncThunk(
        'views/deleteView',
        async (viewId) => {
            await viewsService.deleteView(viewId)
            return viewId
        });

export const createViewThunk =
    createAsyncThunk(
        'views/createView',
        async (view) => {
            const newView = await viewsService.createView(view);
            return newView;
        });
