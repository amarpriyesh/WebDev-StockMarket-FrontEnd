import { findNewsByID} from "../services/news-service"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const HighlightComponent =  () => {
    const sidebar = useSelector((state) => state.sidebar)

    const [news, setNews] =useState([])



   useEffect( () => {
       findNewsByID(sidebar.newsid).then(response =>  setNews(response))
   }, [sidebar.newsid])

    return(  <div >
        <span className="font-monospace fs-4">Highlights</span>

        <ul className="list-group">

            {news.map((news) => news.highlights.map((item) => <li className="list-group-item mt-1 mb-1 rounded bg-light fs-6"><div
                dangerouslySetInnerHTML={{__html:item.highlight}}/></li>))}
        </ul>

    </div>)

}

export default HighlightComponent