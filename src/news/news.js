import NewsItem from "./news-item";
import {w3cwebsocket as W3CWebSocket} from "websocket"
import React from "react";
import {useState} from "react";
const client = new W3CWebSocket('ws://127.0.0.1:8000');



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


    client.onmessage = (message) => {
       const  news1=JSON.parse(message.data)
       // console.log(  JSON.parse(message.data))
        /* const dataFromServer = message.map(data => JSON.parse(message.data));
         console.log('got reply ', dataFromServer )*/
        setNews([...news1,...news])
        console.log(news)
    }


    const [news, setNews] =useState([])


    return(
        <>
            <button onClick={() => onButtonClicked("hello world")}>Send Message</button>
            {news.map(data => <NewsItem news={data} key={data.uuid}/>)}

    </>
)




}

export default NewsComponent