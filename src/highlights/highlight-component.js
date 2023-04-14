import { findNewsByID} from "../services/news-service"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const HighlightComponent =  () => {
    const sidebar = useSelector((state) => state.sidebar)


    const x =   sidebar.newsid
    console.log("ID is",x)




    const [news, setNews] =useState([])
    const news1 = (id1) => findNewsByID(id1).then(response =>  setNews(response))
    // findNews(id)
    news1(x)

   // useEffect((x)=> {news1(x)},[])

    return(<>
        {sidebar.newsid}
        {/*<ul className="list-group">*/}
        {/*    {news.map((news) => news.highlights.map((item) => <li className="list-group-item mt-1 mb-1 rounded bg-light">{item.highlight}</li>))}*/}
        {/*</ul>*/}
    </>)

}

export default HighlightComponent