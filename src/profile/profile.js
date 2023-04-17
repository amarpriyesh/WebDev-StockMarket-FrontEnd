import React, {useEffect,useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../thunks/user-thunks";
import {logoutThunk, profileThunk} from "../thunks/auth-thunks";
import "./profile.css"
import UserList from "./user-list";
import {useNavigate} from "react-router";
import {setSidebar} from "../reducers/sidebar-reducer";

function Profile() {

    const { currentUser } = useSelector((state) => state.user);

    const [profile, setProfile] = useState(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect( () => {
        dispatch(setSidebar({component:"none",newsid:"ddd"}));
        dispatch(profileThunk());
        setProfile(currentUser)
        dispatch(findAllUsersThunk());
    }, [currentUser] );

    return (
        <div className="container">
            <pre>{JSON.stringify(currentUser, null, 2)}</pre>
            <h2>Profile</h2>
            <button onClick={() => {
                dispatch(logoutThunk());
                navigate("/login")
            }} className="float-end btn btn-primary">
                Logout
            </button>
            <div className="row">
                <div className="col-md-6">
                    <button onClick={() => {
                        //dispatch(logoutThunk());
                        navigate("/editProfile")
                    }} className="float-right btn btn-primary">
                        Edit Profile
                    </button>
                    <h3>Personal Information</h3>
                    {profile && (
                        <div className="profile-container my-4">
                            <div className="row">
                                <div className="col-md-4">
                                    {profile.profilePhoto && (
                                        <img src={profile.profilePhoto} alt={`${profile.firstName} ${profile.lastName}`} className="profile-image" />
                                    )}
                                </div>
                                <div className="col-md-8">
                                    <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
                                    <p className="profile-username"><i className="fas fa-user mr-2"></i>{profile.username}</p>
                                    <p className="profile-email"><i className="fas fa-envelope mr-2"></i>{profile.email}</p>
                                    <p className="profile-role"><i className="fas fa-user-tag mr-2"></i>{profile.role}</p>
                                    <p className="profile-age"><i className="far fa-user-circle mr-2"></i>{profile.age}</p>
                                </div>
                            </div>
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
