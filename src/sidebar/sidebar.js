import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import Progress from "../progress/progress";
import {profileThunk} from "../thunks/auth-thunks";
import {findAllUsersThunk} from "../thunks/user-thunks";
import {setSidebar} from "../reducers/sidebar-reducer"


const SidebarComponent = () => {
    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(setSidebar({component:"none",newsid:"ddd"}));

    }, [] );
    if (sidebar.component == "none") {
        return (<Progress/>)
    }
else if (sidebar.component === "news"){
        return( <>{sidebar.newsid}</>)
    }

else{
        return( <>{sidebar.component}</>)
    }


}

export default SidebarComponent