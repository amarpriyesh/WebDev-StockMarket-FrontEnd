import ViewStats from "./view-stats";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {deleteViewThunk, findAllViewsThunk} from "../thunks/views-thunk";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../css/index.css';

const ViewListItem = ({view, key, findAllViews}) => {

    const dispatch = useDispatch();


    const { currentUser } = useSelector((state) => state.user);

    const {newView, setNewView} = useState(view);

    // let view2 = (useSelector((state) => state.view.view))
    // view = view2.find(item => item._id === view._id)


    const deleteViewHandler = (id) => {
        dispatch(deleteViewThunk(id));
        if (findAllViews) {
            findAllViews();
            findAllViews();
        }
    }

    return(

        <li className="list-group-item mb-3 rounded bg-light">
            <div className="row">
                <div className="col-1">
                    <img referrerPolicy="no-referrer" className="wd-who-to-follow-img" width="50px" height="50px" src={view.profilePhoto}/>
                </div>
                <div className="col-10">
                    <div className="ps-1">
                        <Link to={"/profile/" + view.userId} ><span className="wd-username-view"><strong>{view.username}</strong></span></Link>
                        <i cl  assName="fa fa-check-circle"></i>
                        {/*<span className="wd-author"> - {moment(view.datePosted).format('MMMM Do, YYYY') }</span>*/}
                        <span className="wd-author"> - {moment(view.datePosted).fromNow() }</span>
                    </div>
                    <div className="ps-1">
                        <span className="wd-view-title"> {view.title}</span>
                    </div>
                </div>

                <div className="col-1">
                    {currentUser && currentUser._id === view.userId &&
                    <i onClick={() => deleteViewHandler(view._id)} className="fas fa-remove fa-2x fa-pull-right"></i>
                    }
                </div>

            </div>

            <div className="card mt-4" width="100%">
                <div className="card-body">
                    <p className="card-text wd-topic">{view.view}</p>
                </div>
            </div>

            <div>
                <div className="ms-2">

                    <ViewStats view={view} setView={setNewView}/>

                </div>
            </div>
        </li>

    )
}

export default ViewListItem;