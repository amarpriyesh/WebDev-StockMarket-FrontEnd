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
import * as tagService from "../services/tag-service"
import {addViewLikeByUser, findAllLikedViewsByUser, removeLikeViewFromUser} from "../services/user-action-service";
import {
    decreaseViewLikeCount, getViewLikeCount,
    increaseViewLikeCount,
    updateViewCommentCount,
    updateViewLikeCount
} from "../services/views-service";
const ViewStats = ({view, setView}) => {
    // let view2 = (useSelector((state) => state.view.view))
    // view = view2.find(item => item._id === view._id)
    const sidebar = useSelector((state) => state.sidebar)

    const dispatch = useDispatch();
    const likeView = () => {
        dispatch({type: 'like-tuit', view});
    };




    const [showModal, setShow] = useState(false);
    const [tag, setTag] = useState(false);

    const handleTags =()=>{
        if(sidebar.component==="views" && currentUser) {


tagService.createTag({"news":sidebar.newsid,"user":currentUser,"views":view})
alert("view tagged")

        }

    }

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

    const [liked,setLiked] = useState(false)


    const handleLikes =() =>{

        if( !currentUser) {return}

        findAllLikedViewsByUser(currentUser._id).then(res => {
            let index = res[0].likedView.findIndex(t => t.viewId === view._id)
            // console.log("Index ", index)
            if (index !== -1) {
                // Current User already liked view
                removeLikeViewFromUser(currentUser._id, view._id).then(res => {
                    // console.log("removed new like ", res)
                })

                decreaseViewLikeCount(view._id).then()

                setLikesCount(likesCount - 1)
                setLiked(false)
            } else {
                // Current User hasn't liked view yet
                let newViewLiked = {
                    "viewId": view._id,
                    "dateLiked": new Date()
                }
                addViewLikeByUser(currentUser._id, newViewLiked).then(res => {
                    // console.log("added new like ", res)
                })


                increaseViewLikeCount(view._id).then()

                setLikesCount(likesCount + 1)
                setLiked(true)
            }
        })


        //console.log(flag);
        //dispatch(createViewCommentThunk({...view,likes: likesCount, dislikes:dislikesCount, likedBy:temp, dislikedBy: temp2}))
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
        <><div className="row">
            <div className="p-2 pe-5 wd-float-left col-4">

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
                    </Modal.Footer>
                </Modal>

            </div>



            <div className="p-2 pe-5 wd-float-left col-4">
                <a className="wd-tabs-link">
                    <span onClick={likeView}>
                        {
                            <div className="pe-5 wd-float-left">
                                <i onClick={() => handleLikes()}
                                   className={liked ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"} ></i>
                                {likesCount}
                            </div>
                        }
                    </span>

                </a>
            </div>

            <div className="p-2 pe-5 wd-float-left col-4">
                <a className="wd-tabs-link">
                    <span onClick={likeView}>
                        {
                            <div className="pe-5 wd-float-left">
                                <i onClick={() => handleTags()}
                                   className={tag ? "fas fa-tag" : "fas fa-tag"} ></i>
                               Tags
                            </div>
                        }
                    </span>

                </a>
            </div>
        </div>

        </>
    );
}
export default ViewStats;