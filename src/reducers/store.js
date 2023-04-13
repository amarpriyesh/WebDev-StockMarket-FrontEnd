import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import sidebarReducer from "./sidebar-reducer"

const store = configureStore({
    reducer: {
        user: userReducer,
        sidebar:sidebarReducer
    },
});

export default store;
