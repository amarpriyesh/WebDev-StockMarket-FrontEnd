import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {profileThunk} from "./thunks/auth-thunks";

function LoadProfile({children}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
  return children
}

export default LoadProfile;