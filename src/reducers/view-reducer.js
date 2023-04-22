import { createSlice } from "@reduxjs/toolkit";
import {
    addViewCommentThunk,
    createViewCommentThunk,
    createViewThunk, deleteViewCommentThunk,
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
                console.log(payload, "Inside the view reducer")
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
                    ...state.view[viewNdx],
                    ...payload
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
        [addViewCommentThunk.fulfilled]:
            (state, { payload }) => {
                let index = state.view.findIndex(t => t._id === payload._id)
                //let temp = state.view[index].comment
                state.view[index].comment.push(payload.comment[payload.comment.length - 1])
                state.view[index].messageCount = payload.comment.length
                let s = state
            },
            // (state, { payload }) => {
            //     const viewNdx = state.view.view
            //         .findIndex((t) => t._id === payload._id)
            //     state.view[viewNdx] = {
            //         ...state.view[viewNdx],
            //         ...payload
            //
            //     //state.view[viewNdx].comment = payload.comment
            //     }
            // },

        [deleteViewCommentThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const viewNdx = state.view
                    .findIndex((t) => t._id === payload._id)
                state.view[viewNdx] = {
                    ...state.view[viewNdx],
                    ...payload

                    //state.view[viewNdx].comment = payload.comment
                }
            },

    }
});

export const {findView} = viewSlice.actions;
export default viewSlice.reducer;