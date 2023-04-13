import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "../thunks/user-thunks";
import UserItem from "./user-item";

const UserList = () => {
    const { allUsers } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [allUsers])

    return(
        <ul className="list-group">
            {
                // loading &&
                // <li className="list-group-item">
                //     Loading...
                // </li>
            }
            {
                allUsers.map(user => <UserItem key={user._id} user={user}/>)
            }
        </ul>
    );
}

export default UserList;