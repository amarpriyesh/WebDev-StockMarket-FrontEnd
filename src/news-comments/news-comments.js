import NewsCommentItem from "./news-comment-item";
import * as newsCommentService from "../services/news-comments-service"
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import * as newsCommentsService from "../services/news-comments-service";


const NewsComments = (newsID) => {
    const [newsComments,setNewsComments] = useState([])
    useEffect(() => {newsCommentService.findAllComments(newsID.newsID).then(data => {setNewsComments(data)
    console.log("news comments data",data)
    })},[])

    const { currentUser } = useSelector((state) => state.user);
    const [inputText,setInputText] = useState('')

    const createComment = () => {
        newsCommentsService.createComment({"news":newsID.newsID,
                                              "user":currentUser._id,
                                              "comment":inputText}).then(res => {console.log("COMMENT CREATED",res)
            newsCommentService.findAllComments(newsID.newsID).then(data => {setNewsComments(data)})})

        setInputText('')
    }

    const deleteComment=(commentID)=>{
        console.log("COMMENT ID",commentID);
        newsCommentsService.deleteComment(commentID).then(res => {console.log(res)
            newsCommentService.findAllComments(newsID.newsID).then(data => {setNewsComments(data)})

        })

    }

    const updateComment=(comment,commentInitial)=> {
        newsCommentsService.updateComment(comment._id,{...comment,"comment":commentInitial}).then(data => {
            console.log("COMMENT UPDATED SUCCESSFULLY", data)
            newsCommentService.findAllComments(newsID.newsID).then(data => {setNewsComments(data)})

        })
    }

    return(<>
        <div><div className="pt-1 pb-1 row border-dark border-opacity-10 input-group" style={{"border-style":"solid","border-radius":"10px"}}>
            <div className="col-2"> <img className=" rounded-5 mt-2" src={currentUser.profilePhoto} referrerPolicy="no-referrer" height={50} width={50}/></div>
            <div className="col-8"> {currentUser.username}<input type="text"  className="form-control rounded mb-2" value={inputText} onChange={event => setInputText(event.target.value)} placeholder="Type your comment"/>

            </div>
            <div className="col-2"><br></br>
                <button className="btn btn-primary rounded  " onClick={event => {createComment()}}>Create</button></div>


        </div></div>
        <div className="mt-2" >
        <ul className="list-group">

            {newsComments.map(commentNews => <NewsCommentItem comment={commentNews} deleteComment={deleteComment} updateComment={updateComment} key={commentNews._id}/>)}

        </ul>
        </div>
    </>)
}

export default NewsComments
