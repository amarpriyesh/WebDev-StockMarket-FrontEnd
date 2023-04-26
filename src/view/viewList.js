import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import ViewListItem from "./view-list-item.js"
import {findAllViewsThunk, findAllViewsThunkUser} from "../thunks/views-thunk";
import {current} from "@reduxjs/toolkit";

const ViewList = () => {
    const { currentUser } = useSelector((state) => state.user);
    const views = useSelector((state) => state.view);
    const sidebar = useSelector((state) => state.sidebar)
    //const [views, setViews] =useState(viewsN)
    const dispatch = useDispatch();

    useEffect(() => {

        if(sidebar.component !== "views") {
            dispatch(findAllViewsThunk())
        }
        else{
            console.log("REACHING")
            dispatch(findAllViewsThunkUser(currentUser._id))
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


