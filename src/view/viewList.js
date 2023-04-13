import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findAllViews} from "../services/views-service";
import ViewListItem from "./view-list-item.js"
import {findAllViewsThunk} from "../services/views-thunk";
import {findAllNews} from "../services/news-service";
import NewsItem from "../news/news-item";

const ViewList = () => {

    const [views, setViews] =useState([])
    const findViews = () => findAllViews().then(response =>  setViews(response))
    useEffect(()=> {findViews()},[])


    return (
        <>
            <h1>Inside list</h1>
            <ul className="list-group">
                {views.map(data => <ViewListItem view={data} key={data._id}/>)}
            </ul>
        </>
    );
}

export default ViewList;


