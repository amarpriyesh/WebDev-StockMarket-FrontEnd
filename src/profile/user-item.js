import {useDispatch} from "react-redux";
import {deleteUserThunk} from "../thunks/user-thunks";
import {Link} from "react-router-dom";

const UserItem = ({user}) => {
    const dispatch = useDispatch();
    const deleteUserHandler = (id) => {
        dispatch(deleteUserThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-12">
                        <Link to={`/profile/${user._id}`}>{user.firstName} {user.lastName} </Link>&nbsp;
                        {user.role}
                        <span className="btn btn-primary float-right"
                        onClick={() => deleteUserHandler(user._id)}>Delete</span>
                </div>
            </div>
        </li>
    );
};
export default UserItem;