import NewsItem from "./news-item";
import {w3cwebsocket as W3CWebSocket} from "websocket"
import React from "react";
import {useState,useEffect} from "react";
import {findAllNews} from "../services/news-service"
import "./news.css"
import {Link, Route} from "react-router-dom";
import {Routes} from "react-router";
import View from "../view/view";
import {setSidebar} from "../reducers/sidebar-reducer";
import {useDispatch} from "react-redux";
const client = new WebSocket('wss://stockmarket-production.onrender.com');



//
// client.onopen = () => {
//     console.log('web socket client connected');
// };
//
//
//
// function onButtonClicked (hello) {
//     client.send(JSON.stringify({
//                                    type:"message",
//                                    msg:hello
//                                }))
// }

const NewsComponent = () => {
const dispatch = useDispatch()
    const [news, setNews] =useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] =useState(1)
    const [totalPage, setTotalPage] =useState([])
    const [pattern,setPattern] = useState(null)
    const findNews = (page,pattern) => findAllNews(page,pattern).then(response => { setNews(response.data)
    setCurrentPage(response.currentPage)

        setTotalPage(response.totalPage)
    })
    useEffect( () => {
        const fetchData = async () => {
            setLoading(true);

            await findNews(currentPage);

            setLoading(false);
        }
        fetchData()
        dispatch(setSidebar({component: "views", newsid: "none", extra: "news"}))
    }, [])
    const previous =async () => {
        setLoading(true)

        await findNews(Number(currentPage) - 1, pattern)
        setLoading(false)

    }
    const next =async () => {
        setLoading(true)

        await findNews(Number(currentPage) + 1, pattern)
        setLoading(false)
    }






 /*   client.onmessage = (message) => {
       const  news1=JSON.parse(message.data)

       // console.log(  JSON.parse(message.data))
        /!* const dataFromServer = message.map(data => JSON.parse(message.data));
         console.log('got reply ', dataFromServer )*!/
        setNews([...news1])

    }*/





    return(
        <>

            <div className="flex-row
            "><h4 className="font-monospace align-items-center">Market News</h4></div>

            <div className="input-group mb-3">
                <input
                    type="text"
                    value={pattern}
                    className="form-control rounded"
                    placeholder="Search"
                    onChange={event => {setPattern(event.target.value)}}

                />
                <button className="btn btn-primary rounded ml-2"  onClick={()=>{pattern==null?findNews(1,null):findNews(1,pattern)}}>Search</button>
            </div>

            { loading?(
                         <div className="loading-container">
                             <div className="loader"></div>
                             <h3>Loading....</h3>
                         </div>
                     ):

            <ul className="list-group">
            {news.map(data => <NewsItem news={data} key={data._id}/>)}
            </ul>
            }
            <div className="row">
                <div className="col-6">
                <button className="btn-primary rounded  float-end me-2  btnNews mb-5" disabled={currentPage==1} onClick={()=>previous()} >Previous</button>
                </div>
                <div className="col-6">
                    <button className="btn-primary rounded  float-start ms-2 mb-5 btnNews" disabled={currentPage==totalPage} onClick={()=>next()}>Next</button>
                    <span className="font-monospace float-end">Page={currentPage}, Total Pages={totalPage}</span>
                </div>
            </div>
            {/*<button className="btn-primary rounded  float-end me-2  btnNews mb-5"  onClick={()=>onButtonClicked("Hey from client")} >SendClient</button>*/}
        </>
)




}

export default NewsComponent