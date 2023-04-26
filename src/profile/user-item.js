import {useDispatch, useSelector} from "react-redux";
import {deleteUserThunk} from "../thunks/user-thunks";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as privilegeService from "../services/privilege-service"
import {getPrivilege} from "../thunks/privilege-thunk";
import Toggle from "./toggle";

const UserItem = ({user}) => {
    console.log("render")
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [like,setLike] = useState()
    const [comment,setComment] = useState()
    const [view,setView] = useState()
    const [login,setLogin] = useState()

    const setVal=(res) => {
        setLike(Boolean(res.allowLikes))
        setComment(Boolean(res.allowComments))
        setView(Boolean(res.allowViews))
        setLogin(Boolean(res.allowSignIn))
        console.log(Boolean(res.allowSignIn))

    }
    useEffect( () => {

        const privileges =async () => {
            const res = await privilegeService.getPrivilege(user._id)
            setVal(res)





        }
       privileges()



    }, [])

    const setUserLike=async (val) => {

        await privilegeService.updatePrivilege(user._id, {"allowLikes": Boolean(val)})
        await dispatch(getPrivilege(currentUser._id))
        console.log("like toggled", Boolean(val))
        setLike(val)

    }
    const setUserComments=async (val) => {

        await privilegeService.updatePrivilege(user._id, {"allowComments": val})
        await dispatch(getPrivilege(currentUser._id))
        setComment(val)
    }
    const setUserViews=async (val) => {

        await privilegeService.updatePrivilege(user._id, {"allowViews": val})
        await dispatch(getPrivilege(currentUser._id))
        setView(val)
    }
    const setUserSignIn=async (val) => {

        await privilegeService.updatePrivilege(user._id, {"allowSignIn": val})
        await dispatch(getPrivilege(currentUser._id))
        setLogin(val)
    }
    const deleteUserHandler = (id) => {
        dispatch(deleteUserThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-12">
                        <Link to={`/profile/${user._id}`}>{user.firstName} {user.lastName} </Link>&nbsp;
                        {user.role}<span className="me-1 ms-1">Allow</span>
                   {/* <Toggle className="me-1 ms-1" label={" Like "} onClick={setUserLike} toggled={like}/>
                    <Toggle className="me-1 ms-1"  label={" Sign in "} onClick={setUserSignIn} toggled={login}/>
                    <Toggle className="me-1 ms-1"  label={" Comment "} onClick={setUserComments} toggled={comment}/>
                    <Toggle  className="me-1 ms-1"  label={" View "} onClick={setUserViews} toggled={view}/>*/}
                    <label>
                        <input type="checkbox"  defaultChecked={like} onClick={()=> setUserLike(!like)} />
                        <span />
                        <strong>like</strong>
                    </label>
                    <label>
                        <input type="checkbox"  defaultChecked={comment} onClick={()=> setUserComments(!comment)} />
                        <span />
                        <strong>comment</strong>
                    </label>
                    <label>
                        <input type="checkbox"  defaultChecked={view} onClick={()=> setUserViews(!view)} />
                        <span />
                        <strong>view</strong>
                    </label>
                    <label>
                        <input type="checkbox"  defaultChecked={login} onClick={()=> setUserSignIn(!login)} />
                        <span />
                        <strong>login</strong>
                    </label>
                        <span className="btn btn-primary float-right"
                        onClick={() => deleteUserHandler(user._id)}>Delete</span>
                </div>
            </div>
        </li>
    );
};
export default UserItem;