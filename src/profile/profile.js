import React, {useEffect,useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk, logoutThunk, profileThunk} from "../thunks/user-thunks";
import UserItem from "./user-item";
import UserList from "./user-list";
import {useNavigate} from "react-router";

function Profile() {


    const dispatch = useDispatch();
    const navigate = useNavigate()
    /*useEffect(() => {
        dispatch(profileThunk());
        dispatch(findAllUsersThunk());
    }, []);*/
    useEffect( () => {
         dispatch(profileThunk());
        console.log("here")
        dispatch(findAllUsersThunk());
    }, [] );

    const { currentUser } = useSelector((state) => state.user);

    const [profile, setProfile] = useState(currentUser);

    return (
        <div className="container">
            <h2>Profile</h2>
            <button onClick={() => {
                dispatch(logoutThunk());
                navigate("/login")
            }} className="float-end btn btn-primary">
                Logout
            </button>
            <div className="row">
                <div className="col-md-6">
                    <h3>Personal Information</h3>
                    {currentUser && (
                        <div>
                            <h1>Welcome {currentUser.firstName} {currentUser.lastName}</h1>
                        </div>
                    )}
                    <Link to="/search" className="btn btn-primary">
                        Search Results
                    </Link>
                </div>
            </div>
                {currentUser && currentUser.role==="ADMIN" && (
                   <div>
                       Admin View
                       <UserList/>
                   </div>
                )
                    }
        </div>
    );
}

export default Profile;
