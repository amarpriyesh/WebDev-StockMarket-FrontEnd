import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createViewThunk} from "../../thunks/views-thunk";

function CreateComment() {
    let [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);


    const commentClickHandler = () => {
        if (!currentUser || newComment.trim().length === 0) {return}
        /*
        const viewAdd = {
            view: newComment,

            "firstName": currentUser.firstName,
            "lastName": currentUser.lastName,
            "age": currentUser.age,
            "username": currentUser.username,
            "role": currentUser.role,
            "likes": 0,
            "messageCount": 0,
            "profilePhoto" : "/images/elonavatar.jpg",
            "datePosted": new Date()
        }

        console.log(viewAdd);
        console.log("Testing");
        console.log(currentUser);
        dispatch(createViewThunk(viewAdd));
        setNewComment('');

         */
    }



    return (
        <>
            {currentUser &&
                <div className="row">
                    <div className="col-10">
                        <textarea value={newComment} placeholder="My View . . ."
                                  className="form-control border-0"
                                  onChange={(event) => setNewComment(event.target.value)}>
                        </textarea>
                        <div>
                            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
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

export default CreateComment;