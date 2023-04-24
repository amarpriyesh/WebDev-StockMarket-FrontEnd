import NewsComponent from "../news/news";
import React, {useEffect, useState} from "react";
import {findNewsByUserID} from "../services/news-comments-service";
import NewsItem from "../news/news-item";

const NewsCommentsOther = ({id}) =>{

    const [news, setNews] =useState([])
    const findNews = () => findNewsByUserID(id).then(response =>  setNews(response))
    useEffect(()=> {findNews()},[])



    return(
        <>
            <ul className="list-group">
                {news.map(data => <NewsItem news={data} key={data._id}/>)}
            </ul>
        </>
    )


}

export default NewsCommentsOther