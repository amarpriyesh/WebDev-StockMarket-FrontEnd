import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../css/index.css';
import {createViewThunk} from "../thunks/views-thunk";


const CreateView = () => {
    let [newView, setNewView] = useState('');
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);


    const viewClickHandler = () => {
        if (!currentUser || newView.trim().length === 0) {return}
        const viewAdd = {
            view: newView,

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
        setNewView('');
    }



    return (
        <>
            {currentUser &&
                <div className="row">
                    <div className="col-auto">
                        <img src="/images/elonavatar.jpg" width={60}/>
                    </div>
                    <div className="col-10">
                        <textarea value={newView} placeholder="My View . . ."
                                  className="form-control border-0"
                                  onChange={(event) => setNewView(event.target.value)}>
                        </textarea>
                        <div>
                            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                                    onClick={viewClickHandler}>
                                Create View
                            </button>

                        </div>
                    </div>
                    <div className="col-12"><hr/></div>
                </div>
            }
        </>
    );
}
export default CreateView;