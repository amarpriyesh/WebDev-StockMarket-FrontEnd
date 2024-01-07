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
        <li className="list-group-item my-1 rounded-2">
            <div className="row">
                <div className="col-2  justify-content-center flex-column d-flex">
                    <img className="rounded-1" src={user.profilePhoto}></img>
                </div>

                <div className="col-10  text-center align-items-center  d-flex">
                    <div className="col-2 mx-2">

                        <Link to={`/profile/${user._id}`}>{user.firstName} {user.lastName} </Link>&nbsp;
                        {user.role} </div>
                    <div className="col-8 flex-md-row flex-column d-flex">
                        <span className="me-4 col d-none d-xl-block">Privileges:</span>
                   {/* <Toggle className="me-1 ms-1" label={" Like "} onClick={setUserLike} toggled={like}/>
                    <Toggle className="me-1 ms-1"  label={" Sign in "} onClick={setUserSignIn} toggled={login}/>
                    <Toggle className="me-1 ms-1"  label={" Comment "} onClick={setUserComments} toggled={comment}/>
                    <Toggle  className="me-1 ms-1"  label={" View "} onClick={setUserViews} toggled={view}/>*/}

                    <label  className="px-1 col ">
                        <div>
                        <input type="checkbox"  defaultChecked={like} onClick={()=> setUserLike(!like)} />
                        </div>
                        like
                    </label>

                    <label className="px-1 col">
                        <div>
                        <input type="checkbox"  defaultChecked={comment} onClick={()=> setUserComments(!comment)} />
                        </div>
                        comment
                    </label>
                    <label className="px-1 col">
                        <div>
                        <input type="checkbox"  defaultChecked={view} onClick={()=> setUserViews(!view)} />
                        </div>
                        view
                    </label>
                    <label className="px-1 col">
                        <div>
                        <input type="checkbox"  defaultChecked={login} onClick={()=> setUserSignIn(!login)} />
                        </div>
                        login
                    </label>
                    </div>
                    <div className="col-2">
                        <span className="btn btn-primary float-right"
                        onClick={() => deleteUserHandler(user._id)}>Delete</span>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default UserItem;