import React, {useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../thunks/user-thunks";
import {logoutThunk, profileThunk} from "../thunks/auth-thunks";
import "./profile.css"
import UserList from "./user-list";
import {useNavigate} from "react-router";
import {setSidebar} from "../reducers/sidebar-reducer";
import LikedViews from "./liked-views";

function Profile() {

    const {currentUser} = useSelector((state) => state.user);

    const [profile, setProfile] = useState(currentUser);

    const dispatch = useDispatch();
    dispatch(setSidebar({component: "views", newsid: "none", extra: "others"}))
    const navigate = useNavigate()

    const setters = async () => {
        await dispatch(profileThunk())
        await dispatch(findAllUsersThunk());
        dispatch(setSidebar({component: "none", newsid: "ddd"}));
        setProfile(currentUser)

    }
    useEffect(() => {
        /*  dispatch(setSidebar({component:"none",newsid:"ddd"}));
          dispatch(profileThunk());
          dispatch(findAllUsersThunk());*/
        setters()

    }, []);

    return (
        <div className="font-monospace">
            <h4>Profile</h4>
            <div className="row  profile-container">
            <div className="flex-row d-flex justify-content-between">
                <div>
                <h5>Personal Information</h5>
                </div>
                <div className="gap-1 d-flex" >
                <button onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login")
                }} className="btn btn-primary">
                    Logout
                </button>
                <button onClick={() => {
                    //dispatch(logoutThunk());
                    navigate("/editProfile")
                }} className=" btn btn-primary ">
                    Edit Profile
                </button>
                </div>
            </div>




                    {profile && (
                        <div className=" my-4">
                            <div className="row">
                                <div className="col-md-4">
                                    {profile.profilePhoto && (
                                        <img src={profile.profilePhoto}
                                             alt={`${profile.firstName} ${profile.lastName}`}
                                             className="profile-image"/>
                                    )}
                                </div>
                                <div className="col-md-8">
                                    <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
                                    <p className="profile-username"><i
                                        className="fas fa-user mr-2"></i>{profile.username}</p>
                                    <p className="profile-email"><i
                                        className="fas fa-envelope mr-2"></i>{profile.email}</p>
                                    <p className="profile-role"><i
                                        className="fas fa-user-tag mr-2"></i>{profile.role}</p>
                                    <p className="profile-age"><i
                                        className="far fa-user-circle mr-2"></i>{profile.age}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            {currentUser && currentUser.role === "ADMIN" && (
                <div className="mt-3 me-3">
                    <h5>Admin View</h5>
                    <UserList/>
                </div>
            )
            }
        </div>
    );
}

export default Profile;
