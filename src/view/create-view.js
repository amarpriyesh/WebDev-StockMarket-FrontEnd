import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../css/index.css';
import {createViewThunk} from "../thunks/views-thunk";


const CreateView = () => {
    let [newView, setNewView] = useState('');
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);


    const viewClickHandler = () => {

        const viewAdd = {
            view: newView,

            "firstName": "John",
            "lastName": "Cusack",
            "age": 20,
            "username": "john123",
            "password": "123",
            "role": "ADMIN",
            "likes": 0,
            "messageCount": 0,
        }
        console.log(viewAdd);
        console.log("Testing");
        console.log(currentUser);
        dispatch(createViewThunk(viewAdd));
    }



    return (
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
    );
}
export default CreateView;