import { createSlice } from "@reduxjs/toolkit";
import {
    createViewCommentThunk,
    createViewThunk,
    deleteViewThunk,
    findAllViewsThunk,
    updateViewThunk
} from "../thunks/views-thunk";

const initialState = {
    view: []
}

const viewSlice = createSlice({
    name : "view",
    initialState,
    reducers :{

    },

    extraReducers : {
        [findAllViewsThunk.fulfilled]:
            (state, { payload }) => {
                state.view = payload
            },
        [findAllViewsThunk.rejected]:
            (state, { payload }) => {
                state.view = []
            },
        [findAllViewsThunk.pending]:
            (state, { payload }) => {
                state.view = []
            },

        [createViewThunk.fulfilled]:
            (state, { payload }) => {
                state.view.push(payload)
            },

        [deleteViewThunk.fulfilled]:
            (state, { payload }) => {
                state.view = state.view
                    .filter(t => t._id !== payload)
            },

        [updateViewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const viewNdx = state.view
                    .findIndex((t) => t._id === payload._id)
                state.view[viewNdx] = {
                    ...state.view[viewNdx]
                }
            },

        [createViewCommentThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const viewNdx = state.view
                    .findIndex((t) => t._id === payload._id)
                state.view[viewNdx] = {
                    ...state.view[viewNdx],
                    ...payload
                }
            },

    }
});

export const {findView} = viewSlice.actions;
export default viewSlice.reducer;