import React, {useEffect, useState} from "react";
import {findAllViewsByUser} from "../services/views-service";
import ViewListItem from "../view/view-list-item";
import {findAllViewCommentsByUser} from "../services/view-comments-service";

const ViewCommentsOther = ({id}) =>{
    const [views, setViews] =useState([])
    const findAllViews = () => findAllViewCommentsByUser(id).then(response =>  setViews(response))
    useEffect(()=> {findAllViews()},[])


    return(
        <>
            <h2>Inside Like View</h2>
            <ul className="list-group">
                {views.map(data => <ViewListItem view={data} key={data._id} findAllViews={findAllViews}/>)}
                {/*{views.map(data => console.log("InsideMap",data))}*/}
            </ul
            >
        </>
    )


}

export default ViewCommentsOther;