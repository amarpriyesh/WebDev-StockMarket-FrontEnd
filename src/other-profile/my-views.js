import React, {useEffect, useState} from "react";
import {findNewsByUserID} from "../services/news-comments-service";
import NewsItem from "../news/news-item";
import {findAllViewsByUser} from "../services/views-service";
import ViewListItem from "../view/view-list-item";

const MyViews = ({id}) =>{
    const [views, setViews] =useState([])
    const findAllViews = () => findAllViewsByUser(id).then(response =>  setViews(response))
    useEffect(()=> {findAllViews()},[])


    return(
        <>
            <ul className="list-group">
                {views.map(data => <ViewListItem view={data} key={data._id} findAllViews={findAllViews}/>)}
                {/*{views.map(data => console.log("InsideMap",data))}*/}
            </ul
            >
        </>
    )


}

export default MyViews;