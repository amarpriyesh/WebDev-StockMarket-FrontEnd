import {createAsyncThunk} from "@reduxjs/toolkit";
import * as viewsService from "../services/views-service";
import * as tagServie from "../services/tag-service";


export const findAllViewsThunk = createAsyncThunk(
    "views/findAllViews",
    async () => {
        return await viewsService.findAllViews();
    }
);

export const findAllViewsThunkUser = createAsyncThunk(
    "views/findAllViews",
    async (userID) => {
        return await viewsService.findAllViewsByUser(userID);
    }
);


export const findAllViewsThunkNews = createAsyncThunk(
    "views/findAllViews",
    async (userID) => {
        return await tagServie.findTagByNewsID(userID);
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

export const createViewCommentThunk =
    createAsyncThunk(
        'views/createViewComment',
        async (view) => {
            const newView = await viewsService.createViewComment(view);
            return newView;
        });


export const addViewCommentThunk =
    createAsyncThunk(
        'views/addViewComment',
        async ({viewId,comment}) => {
            const res = await viewsService.addViewComment(viewId, comment);
            return res;
        });

export const deleteViewCommentThunk =
    createAsyncThunk(
        'views/deleteViewComment',
        async (viewId, commentId) => {
            const res = await viewsService.deleteViewComment(viewId, commentId);
            return res;
        });