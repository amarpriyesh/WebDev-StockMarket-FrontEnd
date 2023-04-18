import {useDispatch, useSelector} from "react-redux";
import {findAllViewsThunk, updateViewThunk} from "../thunks/views-thunk";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import popupScreen from './comment/popup-comment.js'
import {useEffect, useState} from "react";
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import ViewListItem from "./view-list-item";
import PopupComment from "./comment/popup-comment.js"
import CreateComment from "./comment/create-comment";

const ViewStats = ({view}) => {
    const dispatch = useDispatch();
    const likeView = () => {
        dispatch({type: 'like-tuit', view});
    };



    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { currentUser } = useSelector((state) => state.user);

//    const [arrComment,changeComment] = useState(view.comment)

//     useEffect(() => {
// dispatch(findAllViewsThunk)
//     }, [arrComment])



    // const delComment= (id) => {
    //     const k = arrComment.filter(comment =>  comment._id !== id )
    // changeComment(k)}



    return (
        <>
            <div className="p-2 pe-4 wd-float-left">

                <span onClick={handleShow}><i className="me-2 fa-regular fa-comment"></i>{view.messageCount}</span>



                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="">Comment Section</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        {
                            currentUser && <CreateComment comment={view.comment} view={view}/>
                        }

                        <ul className="list-group">
                            {
                                view.comment && view.comment.map(t =>
                                <PopupComment comment={t} key={t._id} view={view}/>
                                    )
                            }
                        </ul>

                    </Modal.Body>
                    <Modal.Footer>
                        {/*<Button variant="secondary" onClick={handleClose}>*/}
                        {/*    Close*/}
                        {/*</Button>*/}
                        {/*<Button variant="primary" onClick={handleClose}>*/}
                        {/*    Save Changes*/}
                        {/*</Button>*/}
                    </Modal.Footer>
                </Modal>

            </div>



            <div className="p-2 pe-4 wd-float-left">
                <a className="wd-tabs-link">
                    <span onClick={likeView}>
                        {
                            view.liked &&
                            <i onClick={() => dispatch(updateViewThunk({...view,likes: view.likes + 1}))}
                               className="me-2 fa-solid fa-heart"
                               style={{color: 'red'}}></i>
                        }
                        {
                            !view.liked  &&
                            <i onClick={() => dispatch(updateViewThunk({...view,likes: view.likes + 1}))}
                               className="me-2 fa-solid fa-heart"
                               style={{color: 'red'}}></i>
                        }
                        {view && view.likes}
                    </span>
                </a>
            </div>

        </>
    );
}
export default ViewStats;