import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import sidebarReducer from "./sidebar-reducer"
import viewReducer from "./view-reducer"
import privilegeReducer from "./privilege-reducer"

const store = configureStore({
    reducer: {
        user: userReducer,
        sidebar:sidebarReducer,
        view : viewReducer,
        privilege: privilegeReducer
    },
});

export default store;
