import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import Progress from "../progress/progress";
import {profileThunk} from "../thunks/auth-thunks";
import {findAllUsersThunk} from "../thunks/user-thunks";
import {setSidebar} from "../reducers/sidebar-reducer"
import HighlightComponent from "../highlights/highlight-component"
import View from "../view/view";
import {useLocation} from "react-router";
import ViewList from "../view/viewList";




const SidebarComponent = () => {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const sidebar = useSelector((state) => state.sidebar)
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[1];

    if(active==="home"){
        dispatch(setSidebar({component:"views",newsid:"none",extra:"others"}))
    }
    if(active==="views"){
        dispatch(setSidebar({component:"viewpage",newsid:"none",extra:"views"}))
    }
    console.log("SIDEBAR COMPONENT",sidebar.component,sidebar.newsid,sidebar.extra)

    if (sidebar.component === "none" && sidebar.extra==="none") {

        return (<><h4 className="font-monospace">Views</h4><ViewList/></>)
    }
else if (sidebar.component === "news"){
        return( <HighlightComponent/>)
    }
    else if (currentUser && sidebar.component === "views" && sidebar.extra==="news"){
        return( <><View/></>)
    }
    else if (  sidebar.component === "views" && sidebar.extra==="news"){

        return (<> <h4>Views</h4><ViewList/></>)
    }
    else if (  sidebar.component === "views" && sidebar.extra==="tag"){

        return (<> <h4>Views</h4><ViewList/></>)
    }
    else if (sidebar.component === "views" && sidebar.extra==="others"){
        return (<> <h4>Views</h4><ViewList/></>)
    }
    else if (currentUser && sidebar.component === "viewpage" && sidebar.extra==="views"){
        return (<> </>)
    }

else{
        return( <></>)
    }


}

export default SidebarComponent