import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import ViewListItem from "./view-list-item.js"
import {
    findAllViewsThunk,
    findAllViewsThunkNews,
    findAllViewsThunkUser
} from "../thunks/views-thunk";
import {current} from "@reduxjs/toolkit";
import {useLocation} from "react-router";

const ViewList = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[1];
    const { currentUser } = useSelector((state) => state.user);
    const views = useSelector((state) => state.view);
    const sidebar = useSelector((state) => state.sidebar)
    //const [views, setViews] =useState(viewsN)
    const dispatch = useDispatch();

    useEffect(() => {

        console.log("SIDEBAR",sidebar.newsid)

        if( active== "views") {
            dispatch(findAllViewsThunk())
        }
        else if(currentUser && sidebar.component=="views" && sidebar.extra=="news"){
            console.log("only users")
            dispatch(findAllViewsThunkUser(currentUser._id))

        }
        else if( sidebar.component=="views" && sidebar.extra==="tag"){
            console.log("reaching tag")
            dispatch(findAllViewsThunkNews(sidebar.newsid._id))
        }
        else{
            dispatch(findAllViewsThunk())
        }

    }, [])

   /* const [views,setViews]=useState(view)*/



    //
    // const findViews = () => findAllViews().then(response =>  setViews(response))
    // useEffect(()=> {findViews();},[])


    return (
        <>
            <ul className="list-group">
                {
                    views.view.map && views.view.map(view =>
                        <ViewListItem key={view._id} view={view}/>)
                }
            </ul>
        </>
    );
}

export default ViewList;


