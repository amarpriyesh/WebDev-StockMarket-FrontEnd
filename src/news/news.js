import NewsItem from "./news-item";
import {w3cwebsocket as W3CWebSocket} from "websocket"
import React from "react";
import {useState,useEffect} from "react";
import {findAllNews} from "../services/news-service"
const client = new W3CWebSocket('wss://stockmarket-y69s.onrender.com:443');




client.onopen = () => {
    console.log('web socket client connected');
};



function onButtonClicked (hello) {
    client.send(JSON.stringify({
                                   type:"message",
                                   msg:hello
                               }))
}

const NewsComponent = () => {

    const [news, setNews] =useState([])
    const findNews = () => findAllNews().then(response =>  setNews(response))
    useEffect(()=> {findNews()},[])






    client.onmessage = (message) => {
       const  news1=JSON.parse(message.data)
        console.log(news1)
       // console.log(  JSON.parse(message.data))
        /* const dataFromServer = message.map(data => JSON.parse(message.data));
         console.log('got reply ', dataFromServer )*/
        setNews([...news1])

    }





    return(
        <>
            <h4>News</h4>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control rounded"
                    placeholder="Search"

                />
                <button className="btn btn-primary rounded ml-2" type="submit">Search</button>
            </div>
            <ul className="list-group">
            {news.map(data => <NewsItem news={data} key={data._id}/>)}
            </ul>
    </>
)




}

export default NewsComponent