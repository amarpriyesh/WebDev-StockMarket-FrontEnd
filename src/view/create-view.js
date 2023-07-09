import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../css/index.css';
import {createViewThunk} from "../thunks/views-thunk";


const CreateView = () => {
    let [newView, setNewView] = useState('');
    let [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);

    const viewClickHandler = () => {
        if (!currentUser || newView.trim().length === 0) {return}
        const viewAdd = {
            view: newView,

            "firstName": currentUser.firstName,
            "lastName": currentUser.lastName,
            "title": title,
            "age": currentUser.age,
            "username": currentUser.username,
            "role": currentUser.role,
            "likes": 0,
            "userId": currentUser._id,
            "messageCount": 0,
            "profilePhoto" : currentUser.profilePhoto,
            "datePosted": new Date()
        }

        // console.log(viewAdd);
        // console.log("Testing");
        // console.log(currentUser);
        dispatch(createViewThunk(viewAdd));
        setNewView('');
        setTitle('');
    }



    return (
        <>
            {currentUser &&
                <div className="mb-2">
                    <div className=" bg-light list-group ">
                    <div className="col-2  mt-3 mb-2 ">
                        <img className="rounded-2" referrerPolicy="no-referrer" src={currentUser.profilePhoto} width={60}/>
                    </div>
                    <div className="col-10">
                        <input value={title}  className="form-control border-0" type="text" placeholder="Title"
                                onChange={(event) => setTitle(event.target.value)}
                        />
                        <textarea value={newView} placeholder="My View . . ."
                                  className="form-control border-1 mt-3 rounded"
                                  onChange={(event) => setNewView(event.target.value)}>
                        </textarea>
                        <div>
                            <button className="rounded btn btn-primary float-end mb-2 mt-2 ps-3 pe-3 fw-bold"
                                    onClick={viewClickHandler}>
                                Create View
                            </button>

                        </div>
                    </div>
                    <div className="col-12"><hr className="text-decoration-line-through"/></div>

                    </div>

                </div>

            }
        </>
    );
}
export default CreateView;