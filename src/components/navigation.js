import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../services/user-thunks";
import {useNavigate} from "react-router";
function Navigation() {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Link to="/">Home</Link>
            {!currentUser && <Link to="/login">|Login</Link>}
            {currentUser && <Link to="/profile">|Profile</Link>}
            {currentUser && <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}
                className="btn btn-danger">
                Logout
            </button>}
        </div>
    );
}

export default Navigation;
