import { createSlice } from "@reduxjs/toolkit";



const sidebarSlice = createSlice({
                                     name: 'sidebar',
                                     initialState: {component:"none",newsid:"none",extra:"none"},
                                     reducers: {
                                         setSidebar(state, action) {
                                             state.component =action.payload.component
                                             state.newsid =action.payload.newsid
                                             action.payload.extra?state.extra=action.payload.extra:state.extra="none"
                                         }}

                                 });

export const {setSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;
