import React from 'react';
import 'reactjs-popup/dist/index.css';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment/moment";
import {createViewCommentThunk} from "../../thunks/views-thunk";

export default function PopupComment ({comment, view}){

    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    //const {allUsers} = useSelector((state) => state.allUsers); //findUserByIdThunk(comment.userId);

    const deleteCommentHandler = () => {

        let allComments = view.comment.map((item) =>
            Object.assign({}, item, {selected:false})
        )
        //
        let newComment = allComments.filter((item) =>
            item._id !== comment._id)

        //comment.push(comment[0]);

        //let newCommentArray = {{comment}, newCommentAdd}



        //view["comment"] = newData;

        //let newView = {...view, comment: newComment}

        //comment.push(newCommentAdd);
        console.log("comment-delete");
        console.log(newComment);
        dispatch(createViewCommentThunk({...view, comment: newComment}));

        console.log("comment-delete");

    }


    return(
    <>
        <li className="list-group-item mb-3 rounded bg-light">
            <div className="row">
                <div className="col-2">
                    <img className="wd-who-to-follow-img" width="50px" height="50px" src={comment.profilePhoto}/>
                </div>
                <div className="col-9">
                    <div className="ps-1">
                        <span className="wd-author"><strong>{comment.username}</strong></span>
                        <span className="wd-time">  {moment(comment.datePosted).fromNow()}</span>
                    </div>
                </div>
                <div className="col-1">
                    {currentUser && currentUser.username === comment.username &&
                        <i onClick={deleteCommentHandler} className="fas fa-remove fa-2x fa-pull-right"></i>
                    }
                </div>
            </div>

            <div className="card mt-4" width="100%">
                <div className="card-body">
                    <p className="card-text wd-topic">{comment.message}</p>
                </div>
            </div>
        </li>
    </>
    );
}
