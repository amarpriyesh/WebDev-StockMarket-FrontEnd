import {useState} from "react";
import * as newsCommentsService from "../services/news-comments-service"
import {useSelector} from "react-redux";

const NewsCommentItem = ({comment, deleteComment, updateComment}) => {
    console.log("COMMENT DESCRIPTION",comment.news)
    const [stateEdit, setStateEdit] = useState(false)
    const [commentInitial, setCommentInitial] = useState(comment.comment)
    const { currentUser } = useSelector((state) => state.user);
    console.log("CURRENT USER",currentUser._id)
    console.log("Comment USER",comment.user._id)


    return(<div className="row me-1">

       <div className={currentUser._id!==comment.user._id?"col-2":"col-0"}></div><li className= {currentUser._id!==comment.user._id? "list-group-item mt-1 mb-1 rounded bg-light float-end col-10":"list-group-item mt-1 mb-1  rounded bg-light col-10 float-end"} >

        <div className={currentUser._id===comment.user._id?"col-2":"col-0"}></div>
        <div className="row bg-light">
        <div className="col-2">
            <img src={comment.user.profilePhoto} referrerPolicy="no-referrer" className=" rounded-5" height={50} width={50}
            />
        </div>
        <div className="col-10">
            <div>{comment.user.firstName} <i className="me-1 mt-2 fas fa-remove   float-end" onClick={() => deleteComment(comment._id)}/>  </div>
            <div>{!stateEdit && currentUser._id===comment.user._id && <i className=" mt-2 fas fa-pencil float-end" onClick={() => stateEdit?setStateEdit(false):setStateEdit(true)}/>}
                {stateEdit && <i className=" mt-2 fas fa-save float-end" onClick={() => {stateEdit?setStateEdit(false):setStateEdit(true)
                    updateComment(comment,commentInitial)
                }}/>}

                {!stateEdit && commentInitial}
                {stateEdit && <input type="text" className="bg-white text-wrap" value = {commentInitial} onChange={event => setCommentInitial(event.target.value)}/>} </div>
            <span className="float-end"> {new Date(comment.date).toLocaleString()}</span>
        </div>
    </div></li></div>)
}
export default NewsCommentItem