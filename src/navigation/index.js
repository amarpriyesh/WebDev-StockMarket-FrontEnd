import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import  "./index.css"
import {useSelector} from "react-redux";
const NavigationSidebar = (

) => {
    const { currentUser } = useSelector((state) => state.user);
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
            {currentUser ? (
                <h4>Hello, {currentUser.firstName}!</h4>
            ): <h4>Navigation</h4>}
            <div className="list-group fs-5  d-none d-md-block" style={{ marginLeft:"0px"}} >
                <Link to="/" className={`list-group-item  bg-light ${active === '/'?'active':''}`}>
                    <i className="fa fa-line-chart fa-2x" ></i> Market News
                </Link>
                <Link to="/news" className={`list-group-item  bg-light ${active === 'news'?'active':''}`}>
                    <i className="fa fa-newspaper fa-2x"></i>  News
                </Link>
                <Link to="/home" className={`list-group-item bg-light ${active === 'home'?'active':''}`}>
                    <i className="fa fa-home fa-2x"></i>  Home
                </Link>
                <Link to="/search" className={`list-group-item bg-light ${active === 'search'?'active':''}`}>
                    <i className="fa fa-hashtag fa-2x"></i>   Search
                </Link>
                <Link to="/views" className={`list-group-item bg-light ${active === 'view'?'active':''}`}>
                    <i className="fa fa-envelope fa-2x"></i>   View
                </Link>
                {currentUser &&(
                <Link to="/profile" className={`list-group-item bg-light ${active === 'profile'?'active':''}`}>
                    <i className="fa fa-laptop fa-2x"></i> Profile
                </Link>
                )}
                {!currentUser &&(
                <Link to="/login" className={`list-group-item bg-light ${active === 'login'?'active':''}`}>
                    <i className="fa fa-laptop fa-2x"></i> Login
                </Link>
                )}
                {!currentUser &&(
                <Link to="/register" className={`list-group-item bg-light rounded ${active === 'register'?'active':''}`}>
                    <i className="fa fa-laptop fa-2x"></i> Register
                </Link>
                )}

            </div>



            <div className="list-group d-md-none">

                <Link to="/news" className={`list-group-item ${active === 'news'?'active':''}`}>
                    <i className="fa fa-newspaper fa-2x"></i>
                </Link>
                <Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                    <i className="fa fa-home fa-2x"></i>
                </Link>
                <Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>
                    <i className="fa fa-hashtag fa-2x"></i>
                </Link>
                <Link to="/views" className={`list-group-item ${active === 'view'?'active':''}`}>
                    <i className="fa fa-envelope fa-2x"></i>
                </Link>
                {currentUser &&(
                <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                    <i className="fa fa-laptop fa-2x"></i>
                </Link>
                )}
                {!currentUser &&(
                <Link to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>
                    <i className="fa fa-laptop fa-2x"></i>
                </Link>
                )}
                {!currentUser &&(
                <Link to="/register" className={`list-group-item ${active === 'register'?'active':''}`}>
                    <i className="fa fa-laptop fa-2x"></i>
                </Link>
                )}
            </div>

        </>

    )

};
export default NavigationSidebar;