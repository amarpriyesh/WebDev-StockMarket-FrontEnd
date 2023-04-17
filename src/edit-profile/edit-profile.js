import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setSidebar} from "../reducers/sidebar-reducer";
import {profileThunk} from "../thunks/auth-thunks";
import {updateUserThunk} from "../thunks/user-thunks";
import {useNavigate} from "react-router";

function EditProfile() {
    const {currentUser} = useSelector(state => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => {
        dispatch(updateUserThunk(profile));
        navigate("/profile")
    };
    useEffect( () => {
        dispatch(setSidebar({component:"none",newsid:"ddd"}));
        setProfile(currentUser);
        dispatch(profileThunk());
    }, [] );
    return (
        profile && (
        <div className="container">
            <h1>Edit Profile</h1>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" value={profile.firstName}
                                   onChange={(event) => {
                                       const newProfile = {
                                           ...profile,
                                           firstName: event.target.value,
                                       };
                                       setProfile(newProfile);
                                   }}
                                   className="form-control" id="firstName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" value={profile.lastName}
                                   onChange={(event) => {
                                       const newProfile = {
                                           ...profile,
                                           lastName: event.target.value,
                                       };
                                       setProfile(newProfile);
                                   }} className="form-control" id="lastName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={profile.email}
                                   onChange={(event) => {
                                       const newProfile = {
                                           ...profile,
                                           email: event.target.value,
                                       };
                                       setProfile(newProfile);
                                   }} className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="text" value={profile.age}
                                   onChange={(event) => {
                                       const newProfile = {
                                           ...profile,
                                           age: event.target.value,
                                       };
                                       setProfile(newProfile);
                                   }} className="form-control" id="age" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" value={profile.username}
                                   onChange={(event) => {
                                       const newProfile = {
                                           ...profile,
                                           username: event.target.value,
                                       };
                                       setProfile(newProfile);
                                   }} className="form-control" id="username" />
                        </div>
                        <button onClick={save}
                                className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
        )
    );
}

export default EditProfile;