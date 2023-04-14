import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import Progress from "../progress/progress";
import {profileThunk} from "../thunks/auth-thunks";
import {findAllUsersThunk} from "../thunks/user-thunks";
import {setSidebar} from "../reducers/sidebar-reducer"
import HighlightComponent from "../highlights/highlight-component"


const SidebarComponent = () => {
    const sidebar = useSelector((state) => state.sidebar)

    if (sidebar.component == "none") {
        return (<Progress/>)
    }
else if (sidebar.component === "news"){
        return( <HighlightComponent/>)
    }

else{
        return( <>{sidebar.component}</>)
    }


}

export default SidebarComponent