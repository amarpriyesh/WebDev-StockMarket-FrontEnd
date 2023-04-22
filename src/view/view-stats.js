import {useDispatch, useSelector} from "react-redux";
import {createViewCommentThunk, findAllViewsThunk, updateViewThunk} from "../thunks/views-thunk";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import popupScreen from './comment/popup-comment.js'
import {useEffect, useState} from "react";
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import ViewListItem from "./view-list-item";
import PopupComment from "./comment/popup-comment.js"
import CreateComment from "./comment/create-comment";
import ViewComment from "./comment/view-comment";
import AddComment from "./comment/add-comment";
const ViewStats = ({view, setView}) => {
    let view2 = (useSelector((state) => state.view.view))
    view = view2.find(item => item._id === view._id)

    const dispatch = useDispatch();
    const likeView = () => {
        dispatch({type: 'like-tuit', view});
    };




    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { currentUser } = useSelector((state) => state.user);


    const comment1 = view.comment;
    const [comment,setComment] = useState(comment1);
    const [commentCount,setCommentCount] = useState(view.messageCount)


    const [likesCount,setLikesCount] = useState(view.likes)

    const [dislikesCount,setDislikesCount] = useState(view.dislikes)


    const [likedBy,setLikedBy] = useState(view.likedBy)

    const [dislikedBy,setDislikedBy] = useState(view.dislikedBy)


    const handleLikes =() =>{

        if( !currentUser) {return}
        let alreadyLiked = likedBy.indexOf(currentUser._id) > -1;
        if (alreadyLiked) {return}

        let alreadyDisliked = dislikedBy.indexOf(currentUser._id) > -1;
        let temp = [...likedBy];
        temp.push(currentUser._id);
        setLikedBy(temp);

        setLikesCount(temp.length);



        let temp2 = [...dislikedBy];
        if (alreadyDisliked) {
            setDislikesCount(dislikesCount - 1);
            temp2 = (temp2.filter(item => item !== currentUser._id));
            setDislikedBy(temp2)
        }


        //console.log(flag);
        dispatch(createViewCommentThunk({...view,likes: likesCount, dislikes:dislikesCount, likedBy:temp, dislikedBy: temp2}))
        //setView({...view,likes: likesCount, dislikes:dislikesCount, likedBy:likedBy, dislikedBy: dislikedBy})
    }

    const handleDislikes =() =>{
        if( !currentUser) {return}


        let alreadyDisliked = dislikedBy.indexOf(currentUser._id) > -1;
        if (alreadyDisliked) {return}

        let alreadyLiked = likedBy.indexOf(currentUser._id) > -1;
        let temp = [...dislikedBy, currentUser._id];
        setDislikedBy(temp);
        setDislikesCount(temp.length);

        let temp2 = [...likedBy];

        if (alreadyLiked) {
            setLikesCount(likesCount - 1);

            temp2 = (temp2.filter(item => item !== currentUser._id))
            setLikedBy(temp2)
        }


        //console.log(flag);
        dispatch(createViewCommentThunk({...view,likes: likesCount, dislikes:dislikesCount, likedBy:temp2, dislikedBy: temp}))
        //setView({...view,likes: likesCount, dislikes:dislikesCount, likedBy:likedBy, dislikedBy: dislikedBy})
    }


    const delComment= (id) => {
       const k = comment.filter(comment =>  comment._id !== id )
        setComment(k)}

    const addComment= (c) => {
        setComment(c)
    }

    const setCommentCountFun = (c) => {
        setCommentCount(c)
    }



    return (
        <>
            <div className="p-2 pe-5 wd-float-left">

                <span onClick={handleShow}><i className="me-2 fa-regular fa-comment"></i>{commentCount}</span>



                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="">Comment Section</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        {
                            currentUser && <AddComment view={view} setComment={setComment} setCommentCount={setCommentCount}/>
                            //<CreateComment view = {view} func={addComment} commentCountFun={setCommentCountFun}/>
                        }

                        <ul className="list-group">
                            {
                                comment && comment.map(t =>
                                    <ViewComment comment = {t} viewId={view._id} setComment={setComment} setCommentCount={setCommentCount}></ViewComment>
                                    //<PopupComment view={view} key={t._id} func={delComment} commentCountFun={setCommentCountFun} currentComment={t}/>
                                )
                            }
                        </ul>

                        {/*<ul className="list-group">*/}
                        {/*    {*/}
                        {/*        comment && comment.map(t =>*/}
                        {/*        <PopupComment view={view} key={t._id} func={delComment} commentCountFun={setCommentCountFun} currentComment={t}/>*/}
                        {/*            )*/}
                        {/*    }*/}
                        {/*</ul>*/}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>



            <div className="p-2 pe-5 wd-float-left">
                <a className="wd-tabs-link">
                    <span onClick={likeView}>
                        {
                            <div className="pe-5 wd-float-left">
                                <i onClick={() => handleLikes()}
                                   className="fa-solid fa-thumbs-up"></i>
                                {likesCount}
                            </div>
                        }
                        {
                            <div className=" pe-5 wd-float-left">
                                <span onClick={handleDislikes}>
                                <i
                                   className="fa-solid fa-thumbs-down"></i>
                                {dislikesCount}
                                    </span>
                            </div>
                        }
                        {view && view.likes}
                    </span>

                </a>
            </div>

        </>
    );
}
export default ViewStats;