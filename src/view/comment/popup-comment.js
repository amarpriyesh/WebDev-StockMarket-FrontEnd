import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useDispatch, useSelector} from "react-redux";
import CreateComment from "./create-comment";
import moment from "moment/moment";
import ViewStats from "../view-stats";
import {findUserByIdThunk} from "../../thunks/user-thunks";
import {findUserById} from "../../services/user-service";

export default function PopupComment ({comment}){

    const { currentUser } = useSelector((state) => state.user);

    //const {allUsers} = useSelector((state) => state.allUsers); //findUserByIdThunk(comment.userId);

    console.log("lets see")
    //console.log(findUserById(comment.userId))

    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuitThunk(id));
    }

    return (
        <>
            {
                currentUser && <CreateComment comment={comment}/>
            }
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
                        <i onClick={deleteTuitHandler(comment._id)} className="fas fa-remove fa-2x fa-pull-right"></i>
                    </div>
                </div>

                <div className="card mt-4" width="100%">
                    <div className="card-body">
                        <p className="card-text wd-topic">{comment.message}</p>
                    </div>
                </div>
            </li>
        </>
    )
}
