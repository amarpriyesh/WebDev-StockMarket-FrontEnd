import {Link, Route, useLocation, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {findUserById} from "../services/user-service";
import {logoutThunk} from "../thunks/auth-thunks";
import UserList from "../profile/user-list";
import "../profile/profile.css"
import {Routes} from "react-router";
import View from "../view/view";
import NewsCommentsOther from "./news-comments-other";
import NewsLikedOther from "./news-liked-others";
import MyViews from "./my-views";
import ViewCommentsOther from "./view-comments-other";

function OtherProfile() {
  const {id} = useParams();
    const location = useLocation();
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const response = await findUserById(id);
    setUser(response);
  }
    useEffect(() => {
    fetchUser().then(r => console.log(r));
    } , []);
    return (
        <div className="container">
          <h2>Profile</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>Personal Information</h3>
              {user && (
                  <div className="profile-container my-4">
                    <div className="row">
                      <div className="col-md-4">
                        {user.profilePhoto && (
                            <img src={user.profilePhoto} alt={`${user.firstName} ${user.lastName}`} className="profile-image" />
                        )}
                      </div>
                      <div className="col-md-8">
                        <h2>{`${user.firstName} ${user.lastName}`}</h2>
                        <p className="profile-username"><i className="fas fa-user mr-2"></i>{user.username}</p>
                        <p className="profile-role"><i className="fas fa-user-tag mr-2"></i>{user.role}</p>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <Link to={`/profile/${id}/comments`}  className={`nav-link ${location.pathname.indexOf("/comments") >= 0 ? 'active':''}`}>Commented News</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/profile/${id}/likes`}  className={`nav-link ${location.pathname.indexOf("/likes") >= 0 ? 'active':''}`}>Liked News</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/profile/${id}/dislikes`}  className={`nav-link ${location.pathname.indexOf("/dislikes") >= 0 ? 'active':''}`}>Disliked News</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/profile/${id}/tags`}  className={`nav-link ${location.pathname.indexOf("/tags") >= 0 ? 'active':''}`}>Tagged Views</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/profile/${id}/view/created`}  className={`nav-link ${location.pathname.indexOf("/view/created") >= 0 ? 'active':''}`}>Created Views</Link>
                </li>
                {/*<li className="nav-item">*/}
                {/*    <Link to={`/profile/${id}/viewComments`}  className={`nav-link ${location.pathname.indexOf("/viewComments") >= 0 ? 'active':''}`}>Commented Views</Link>*/}
                {/*</li>*/}
            </ul>
            <Routes>
                <Route path={`/`} element={<NewsCommentsOther id={id}/>}/>
                <Route path={`/comments`} element={<NewsCommentsOther id={id}/>}/>
                <Route path={`/likes`} element={<NewsLikedOther id={id}/>}/>
                <Route path={`/dislikes`} element={""}/>
                <Route path={`/tags`} element={""}/>
                <Route path={`/view/created`} element={<MyViews id={id}/>}/>
                {/*<Route path={`/viewComments`} element={<ViewCommentsOther id={id}/>}/>*/}
            </Routes>add .
        </div>
  );
}

export default OtherProfile;