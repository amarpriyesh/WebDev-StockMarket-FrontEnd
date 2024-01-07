import React, { useState,useEffect } from "react";
import {useLocation, useNavigate} from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk,googleLoginThunk } from "../thunks/auth-thunks";
import { useSelector } from "react-redux";
import {GoogleLogin,GoogleOAuthProvider,useGoogleLogin} from  '@react-oauth/google';
import {setSidebar} from "../reducers/sidebar-reducer";
import {getPrivilege} from "../thunks/privilege-thunk"
import {createNewUserAction} from "../services/user-action-service.js";
import {findUserByEmail} from "../services/user-service";
import yourImage from '../images/web_light_sq_ctn@4x.png';

import axios from "axios";

function LoginScreen() {
    const {currentUser} = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setSidebar({component:"none",newsid:"ddd"}));


    var clientId = "959350101705-iulfiifgd5jt2n09cuuu9vj3a9lnqb0v.apps.googleusercontent.com"
    if (process.env.REACT_APP_ENVIRONMENT == "PRODUCTION") {
        clientId = "959350101705-2b65fq1nv6o2211ipkt87cb7a5askm82.apps.googleusercontent.com"
    }


    const login = useGoogleLogin({
                                     onSuccess: (codeResponse) => setUser(codeResponse)
                                     ,
                                     onError: (error) => console.log('Login Failed:', error)
                                 });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log("This data",res.data)
                        setProfile(res.data);
                         responseGoogle(res.data)
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
  /*  const logOut = () => {
        googleLogout();
        setProfile(null);
    };*/

    const responseGoogle = async (response) => {
        console.log("Google Object",response)
        if(response.error){
            return
        }
        const user = {
            username: response.given_name,
            password: response.id,
            email: response.email,
            profilePhoto: response.picture,
            firstName: response.given_name,
            lastName: response.name

        }
        console.log("google user", user)

        const returnedUserResponse = await dispatch(googleLoginThunk(user));
        if (returnedUserResponse.error) {
            setError("Incorrect credentials");
            navigate("/login")
        } else {

            navigate("/");
            console.log("currentUser",returnedUserResponse.payload._id)
             dispatch(getPrivilege(returnedUserResponse.payload._id))
        }

        console.log('Logged In', currentUser);

        let userId = ""

        await findUserByEmail(user.email).then(res => {
                console.log("Find User by email -", res)
                userId = res._id
            }

        )

        let newUserAction = {
            userId: userId,
            username: user.username,
            role: "REGISTERED",
            likedNews: [],
            likedView: [],
            postedView: [],
        }

        console.log('Creating new user Action -', newUserAction);

        createNewUserAction(newUserAction).then(res => {
                console.log( "Created new user Action", res)
            }
        )

    }

    const handleLogin =  async () => {
        const response = await dispatch(loginThunk({ email, password }));
        if (response.error) {
            setError("Incorrect credentials");
            navigate("/login")
        } else {
            console.log("resonse payload id",response.payload._id)
            await dispatch(getPrivilege(response.payload._id))
            console.log(response)

            let newUserAction = {
                userId: response.payload._id,
                username: response.payload.username,
                role: response.payload.role,
                likedNews: [],
                likedView: [],
                postedView: [],
            }

            console.log('Creating new user Action -', newUserAction);

            createNewUserAction(newUserAction).then(res => {
                    console.log( "Created new user Action", res)
                }
            )

            navigate("/");

        }
    };
    return (
        <div>
        <h4 className="font-monospace">Login Page</h4>
        <div className="container">
            <div className="row justify-content-center mt-3">
                {/*<div className="col-md-6 col-lg-4">*/}
                <div className="col-10">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Login</h2>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <button onClick={handleLogin} className="btn btn-primary btn-block">
                                    Login
                                </button>

                                    <button className="btn  btn-primary btn-block"  style={{backgroundImage:`url(${yourImage})`,  backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat',
                                        width: '200px',
                                        height: '50px', }} onClick={() => login()}> </button>

                                {/*<useGoogleLogin
                                    className="btn btn-light btn-block mt-3"

                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={"single_host_origin"}
                                />*/}

                            </div>
                            {error && (
                                <div className="alert alert-danger mt-3" role="alert">
                                    {error}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default LoginScreen;
