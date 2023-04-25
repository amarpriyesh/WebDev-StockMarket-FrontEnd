import NewsComponent from "../news/news";
import React, {useEffect, useState} from "react";
import {newsLikedByUser} from "../services/news-like-service";
import NewsItem from "../news/news-item";

const NewsLikedOther = ({id}) =>{

    const [likes, setLikes] =useState([])
    const findLikes = () => newsLikedByUser(id).then(response =>  setLikes(response))
    useEffect(()=> {findLikes()},[])



    return(
        <>
            <ul className="list-group">
                {likes.map(data => <NewsItem news={data.news} key={data.news._id}/>)}
            </ul>
        </>
    )


}

export default NewsLikedOther