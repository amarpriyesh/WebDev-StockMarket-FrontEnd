import NewsCommentItem from "./news-comment-item";
import * as newsCommentService from "../services/news-comments-service"
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import * as newsCommentsService from "../services/news-comments-service";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";


const NewsComments = (newsID) => {
    const [newsComments,setNewsComments] = useState([])
    const navigate = useNavigate();
    useEffect(() => {newsCommentService.findAllComments(newsID.newsID).then(data => {setNewsComments(data)
    })},[])

    const { currentUser } = useSelector((state) => state.user);
    const [inputText,setInputText] = useState('')

    const createComment = () => {
        if(!currentUser){
            alert("User is not authorized, taking you to login page")
            navigate("/login")
            return
        }
        newsCommentsService.createComment({"news":newsID.newsID,
                                              "user":currentUser._id,
                                              "comment":inputText}).then(res => {console.log("COMMENT CREATED",res)
            newsCommentService.findAllComments(newsID.newsID).then(data => {setNewsComments(data)})})

        setInputText('')
    }

    const deleteComment=(commentID)=>{
        console.log("COMMENT ID",commentID);
        newsCommentsService.deleteComment(commentID).then(res => {console.log("COMMENT DELETED",res)
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
        <div><div className="pt-1 pb-1 row border-dark border-opacity-10 input-group" style={{borderStyle:"solid",borderRadius:"10px"}}>
            <div className="col-2">

                {currentUser &&
                    <img className=" rounded-5 mt-2" src={currentUser.profilePhoto}
                         referrerPolicy="no-referrer" height={50} width={50}/>

                }</div>



            { currentUser && <div className="col-8 row ps-0"> <Link className="ps-0 float-start" style={{"text-decoration": "none"}} to={`/profile/${currentUser._id}`}>{currentUser.username}</Link><input type="text"  className="form-control rounded mb-2" value={inputText} onChange={event => setInputText(event.target.value)} placeholder="Type your comment"/>

            </div>}
            { !currentUser && <div className="col-8 row ps-0"> <a  className=" ps-0 link-primary" onClick={() =>{navigate("/login")}}>Sign-in to post comments</a><input type="text"  className="form-control rounded mb-2" value={inputText} onChange={event => setInputText(event.target.value)} placeholder="Type your comment"/>

            </div>}
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
