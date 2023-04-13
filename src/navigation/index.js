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
            {currentUser && (
                <p>Hello, {currentUser.firstName}!</p>
            )}
            <div className="list-group  d-none d-lg-block  fs-6">
                <Link to="/" className={`list-group-item  bg-light ${active === '/'?'active':''}`}>
                    <i className="fa fa-newspaper-o fa-2x" style={{"color":"blue"}}></i> MarketNews
                </Link>
                <Link to="/news" className={`list-group-item  bg-light ${active === 'news'?'active':''}`}>
                    <i className="fa fa-home"></i>  News
                </Link>
                <Link to="/home" className={`list-group-item bg-light ${active === 'home'?'active':''}`}>
                    <i className="fa fa-home"></i>  Home
                </Link>
                <Link to="/search" className={`list-group-item bg-light ${active === 'search'?'active':''}`}>
                    <i className="fa fa-hashtag"></i>   Search
                </Link>
                <Link to="/views" className={`list-group-item bg-light ${active === 'view'?'active':''}`}>
                    <i className="fa fa-envelope"></i>   View
                </Link>
                {currentUser &&(
                <Link to="/profile" className={`list-group-item bg-light ${active === 'profile'?'active':''}`}>
                    <i className="fa fa-laptop"></i> Profile
                </Link>
                )}
                {!currentUser &&(
                <Link to="/login" className={`list-group-item bg-light ${active === 'login'?'active':''}`}>
                    <i className="fa fa-laptop"></i> Login
                </Link>
                )}
                {!currentUser &&(
                <Link to="/register" className={`list-group-item bg-light rounded ${active === 'register'?'active':''}`}>
                    <i className="fa fa-laptop"></i> Register
                </Link>
                )}

                <div className="row pt-2 pe-2 ">
                    <button type="button"
                            className="btn btn-primary btn-lg btn-block rounded-pill width1"> Views
                    </button>
                </div>
            </div>



            <div className="list-group wd-margin-left d-lg-none">
                <a className="list-group-item"> <i className="fa fa-twitter fa-2x" style={{"color":"blue"}}></i>   </a>
                <Link to="/news" className={`list-group-item ${active === 'news'?'active':''}`}>
                    <i className="fa fa-home"></i>
                </Link>
                <Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                    <i className="fa fa-home"></i>
                </Link>
                <Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>
                    <i className="fa fa-hashtag"></i>
                </Link>
                <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                    <i className="fa fa-laptop"></i>
                </Link>
                <Link to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>
                    <i className="fa fa-laptop"></i>
                </Link>
                <Link to="/register" className={`list-group-item ${active === 'register'?'active':''}`}>
                    <i className="fa fa-laptop"></i>
                </Link>
                <div className="row pt-3 pe-2">
                    <button type="button"
                            className="btn btn-primary btn-lg btn-block rounded-pill width1">Tweet
                    </button>
                </div>
            </div>

        </>

    )

};
export default NavigationSidebar;