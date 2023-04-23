import React from 'react';
import 'reactjs-popup/dist/index.css';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment/moment";
import {findAllViewsThunk} from "../../thunks/views-thunk";
import {Link} from "react-router-dom";
import {
    addViewComment,
    deleteViewComment,
    findAllViewComments,
    updateViewCommentCount
} from "../../services/views-service";

export default function ViewComment ({comment, viewId, setComment, setCommentCount}){

    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    dispatch(findAllViewsThunk);
     const deleteCommentHandler = () => {
         deleteViewComment(viewId, comment._id).then(res =>
         {
             console.log("COMMENT deleted",res)

             findAllViewComments(viewId).then(data => {
                 setComment(data[0].comment)
                 setCommentCount(data[0].comment.length)

                 updateViewCommentCount(viewId, data[0].comment.length).then(data => {
                     console.log("Inside updateViewCommentCount",data)

                 })
             })

         })
     }


    return(
        <>
            <li className= {(currentUser && comment.username === currentUser.username) ? "list-group-item mb-3 rounded bg-light ms-5" : "list-group-item mb-3 rounded bg-light me-5"}>
                <div className="row">
                    {/*{*/}
                    {/*    comment.username === currentUser.username &&*/}
                    {/*    <div className="col-1"></div>*/}
                    {/*}*/}
                    <div className="col-2">
                        <img referrerPolicy="no-referrer" className="wd-who-to-follow-img" width="50px" height="50px" src={comment.profilePhoto}/>
                    </div>
                    <div className="col-9">
                        <div className="ps-1">
                            <Link to={"/profile/" + comment.userId} ><span className="wd-author"><strong>{comment.username}</strong></span></Link>
                            <span className="wd-time">  {moment(comment.datePosted).fromNow()}</span>
                        </div>

                        <div className="card mt-1" width="100%">
                            <div className="card-body">
                                <p className="card-text wd-topic">{comment.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        {currentUser && currentUser.username === comment.username &&
                            <i onClick={deleteCommentHandler} className="fas fa-remove fa-2x fa-pull-right"></i>
                        }
                    </div>
                </div>

            </li>
        </>
    );
}
