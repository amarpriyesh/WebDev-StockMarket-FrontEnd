import ViewStats from "./view-stats";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {deleteViewThunk, findAllViewsThunk} from "../thunks/views-thunk";
import {useEffect} from "react";

const ViewListItem = ({view}) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    const deleteViewHandler = (id) => {
        dispatch(deleteViewThunk(id));
    }

    return(

        <li className="list-group-item mb-3 rounded bg-light">
            <div className="row">
                <div className="col-1">
                    <img className="wd-who-to-follow-img" width="50px" height="50px" src="/images/elonavatar.jpg"/>
                </div>
                <div className="col-10">
                    <div className="ps-1">
                        <span className="wd-author"><strong>{view.username}</strong></span>
                        <i cl  assName="fa fa-check-circle"></i>
                        <span className="wd-author"> - {moment(view.datePosted).format('MMMM Do, YYYY') }</span>
                    </div>
                    <div>
                    </div>
                </div>

                <div className="col-1">
                    {currentUser && currentUser.username === view.username &&
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

                    <ViewStats view={view}/>

                </div>
            </div>
        </li>

    )
}

export default ViewListItem;