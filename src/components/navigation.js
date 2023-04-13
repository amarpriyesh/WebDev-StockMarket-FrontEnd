import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../thunks/auth-thunks";
function Navigation() {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div>
            <Link to="/">Home</Link>
            {!currentUser && <Link to="/login">|Login</Link>}
            {!currentUser && <Link to="/register">|Register</Link>}
            {currentUser && <Link to="/profile">|Profile</Link>}
            {currentUser && <Link to="/login"
                onClick={() => {
                    dispatch(logoutThunk());
                }}>|Logout|
            </Link>}
            {currentUser && currentUser.username}

        </div>
    );
}

export default Navigation;
