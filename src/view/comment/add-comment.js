import React, { useState} from "react";
import { useSelector} from "react-redux";

import {addViewComment, findAllViewComments, updateViewCommentCount} from "../../services/views-service";
import {createViewComment} from "../../services/view-comments-service";

function AddComment({view, setComment, setCommentCount}) {
    let [newComment, setNewComment] = useState('');

    const { currentUser } = useSelector((state) => state.user);

    const commentClickHandler = () => {
        if (!currentUser || newComment.trim().length === 0) {return}

        let newCommentAdd = {
            "userId": currentUser._id,
            "username": currentUser.username,
            "message": newComment,
            "likes": 0,
            "dislikes":0,
            "profilePhoto": currentUser.profilePhoto,
            "datePosted": new Date()
        }

        addViewComment(view._id, newCommentAdd).then(res =>
            {

                findAllViewComments(view._id).then(data => {
                    setComment(data[0].comment)
                    setCommentCount(data[0].comment.length)

                    updateViewCommentCount(view._id, data[0].comment.length).then()
                })

            })

        createViewComment({views : view, user: currentUser._id, date: new Date(), comment: newComment}).then(res =>
            console.log("inside comment add",res)
        )

        setNewComment('')
    }




    return (
        <>
            {currentUser &&
                <div className="row">
                    <div className="col-12">
                        <textarea value={newComment} placeholder="My Comment . . ."
                                  className="form-control border-0"
                                  onChange={(event) => setNewComment(event.target.value)}>
                        </textarea>
                        <div>
                            <button className="rounded btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                                    onClick={commentClickHandler}>
                                Comment
                            </button>

                        </div>
                    </div>
                    <div className="col-12"><hr/></div>
                </div>
            }
        </>
    );
}

export default AddComment;