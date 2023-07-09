import {Link} from "react-router-dom";
import Progress from "../progress/progress";
import SidebarComponent from "../sidebar/sidebar";
import {useDispatch,useSelector} from "react-redux";
import {setSidebar} from "../reducers/sidebar-reducer"
import NewsComponent from "./news";
import NewsComments from "../news-comments/news-comments";
import * as newsLikeService from "../services/news-like-service"
import * as newsCommentsService from "../services/news-comments-service"
import React, {useEffect, useState} from "react";
import CreateComment from "../news-comments/create-comment";
import {commentsCount} from "../services/news-comments-service";

const NewsItem = ({news = {"description"
:
"Zomato NZ Media Private Limited is Zomato’s New Zealand-based wholly-owned subsidiary, whereas Zomato Australia Pty Limited is based out of Australia and is a step-down subsidiary, , zomato",
"image"
    :
    "https://static.businessworld.in/article/article_extra_large_image/1643610664_fx7jMh_zomato.png",
"title"
    :
    "Zomato Announces Dissolution Of Subsidiaries In NZ, Australia",
"uuid"
    :
    "771e55f3-e624-465a-a6a8-f4ee7599e327"

}}) => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.user);
    const [likeCount,setLikeCount] = useState(0)
    const [commentCount,setCommentCount] = useState(0)
    const [likeState,setLikeState] = useState(false)
    const [showComment, setShowComment] = useState(false)
    const [renderError,setRenderError] = useState(false)
    const { privilege } = useSelector((state) => state.privilege);

    useEffect(()=>{
         newsLikeService.newsLikeCount(news._id).then(res=> {
             setLikeCount(res)})
        newsCommentsService.commentsCount(news._id).then(res=> {
            setCommentCount(res)})

        if(currentUser){
        newsLikeService.isNewsLiked(currentUser._id,news._id).then(res => {
          setLikeState(res)

    })}},[])

    const setNewsLike =  () => {


        setRenderError(false)
        if(!currentUser){
            if(window.confirm("You are not authorized to like a news, Click OK to login")) {
                window.location.href = "/login"
            }
            return
        }
        if(!privilege.allowLikes){
            setRenderError(true)
            return
        }
        if(likeState){
           setLikeState(false)
            setLikeCount(likeCount-1)
            newsLikeService.updateNewsLike(currentUser._id, news._id, false)
        }
        else{
            setLikeState(true)
            setLikeCount(likeCount+1)
            newsLikeService.updateNewsLike(currentUser._id, news._id, true)
        }

    }

    const incrementComment =() =>{
        setCommentCount(commentCount+1)
        console.log(commentCount)
    }
    const decrementComment =() =>{
        setCommentCount(commentCount-1)
    }
    return(

            <li className="list-group-item mt-1 mb-1 rounded bg-light" >
    <div className="row" >

        <div className="d-none d-sm-none d-md-block col-2">

            <img  src={news.image}  className=" rounded" height={80} width={100}
            />
            <div>
                <span>Symbol:</span> <span className="fw-bold text-nowrap"> {news.symbol}
               </span>
            </div>
        </div>


        <div className="col-sm-12 col-md-10">
            <div className="row">
                <div className="col-md-4 col-6">
                    <span className="align-content-left fw-bolder fs-6"> {news.company}</span>
                </div>
                <div className="d-none d-sm-none d-md-block col-md-4 text-center">
                    <span >{news.industry}</span>         </div>
                <div className="col-md-4 col-6">
                    <span className="float-end">{new Date(news.time).toLocaleString()}</span>

                </div>
            </div>
            <a style={{textDecoration: "none"}} href={"https://"+news.source}>@{news.source}</a>
            <div className="row">
            <div className="fw-bold col-10 mr-2 text-justify">{news.title}</div>
            <div className="  d-none d-md-none d-lg-flex row col-lg-2 " style={{borderWidth: "1px",
                borderStyle: "outset",
                boxShadow: "2px 2px #888888",
                "height":"50px",
                borderRadius:"5px"
            }} >
               <div className="text-center p-0" style={{ "margin": "0 auto",
                   float: "none"}} > Sentiment </div>
            <input style={{"width": "50px" , "margin": "0 auto",
                float: "none"}} type="range" className="form-range" min="-1" max="1" id="customRange3"  value={news.sentiment} onChange={()=>{}}  />
            </div>
            </div>
            <div className=" text-justify">{news.description}</div>
            <div className="row mt-2 mb-2">
                <span> <i className="fa-regular fa-comment float-start col-3" onClick={() => {showComment?setShowComment(false):setShowComment(true)}}><span className="font-monospace ms-2">{commentCount}</span> </i> {likeState?<i className="fa-solid fa-thumbs-up float-start col-3" style={{"color":"red"}} onClick={()=>{setNewsLike()}}><span className="font-monospace ms-2">{ likeCount}</span></i>:<i className="fa-regular fa-thumbs-up  float-start col-3  " style={likeCount>0?{"color":"red"}:{"color":"black"}} onClick={()=>{setNewsLike()}} ><span className="font-monospace ms-2">{ likeCount}</span></i>} <i className="fas fa-paste float-start col-3" onClick={() => dispatch(setSidebar({component:"views",newsid:news,extra:"news"}))}/> <i className="fas fa-link float-start col-1" onClick={() => dispatch(setSidebar({component:"news",newsid:news._id}))}/> <i className="fas fa-lightbulb-o float-end col-1" onClick={() => dispatch(setSidebar({component:"views",newsid:news,extra:"tag"}))}/> </span>

            </div>
            {
                showComment &&
                <NewsComments news={news} incrementComment={incrementComment} decrementComment={decrementComment} />
            }
           </div>
        {renderError && <div className="alert alert-danger mt-3" role="alert">
            User is not authorized to post comments. Contact the Admin.
        </div>}
        </div>
            </li>

    )
}

export default NewsItem