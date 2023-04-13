import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk,googleLoginThunk } from "../thunks/auth-thunks";
import { useSelector } from "react-redux";
import {GoogleLogin,GoogleLogout} from "react-google-login";

function LoginScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    var clientId="959350101705-iulfiifgd5jt2n09cuuu9vj3a9lnqb0v.apps.googleusercontent.com"
    if (process.env.REACT_APP_ENVIRONMENT=="PRODUCTION") {
        clientId="959350101705-2b65fq1nv6o2211ipkt87cb7a5askm82.apps.googleusercontent.com"
    }



    const responseGoogle = (response) => {
        const user = {
            username: response.profileObj.givenName,
            password: response.profileObj.googleId,
            email : response.profileObj.email,
            profilePhoto: response.profileObj.imageUrl,
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName

        }
        console.log("google user",user)
        dispatch(googleLoginThunk(user));

        console.log('Logged In',currentUser);

    }

    const handleLogin = async () => {
        dispatch(loginThunk({ email, password }));
        navigate("/");
    };
    return (
        <div className="container">
            <h1>
                <button onClick={handleLogin} className="float-end btn btn-primary">
                    Login
                </button>
                <div>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /></div>
                Login Screen
            </h1>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div>
                <label>Email</label>
                <br />
                <input
                    className="form-control"
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            {currentUser && (
                <div>
                    <h1>Welcome {currentUser.firstName} {currentUser.lastName}</h1>
                </div>
            )}
        </div>
    );
}
export default LoginScreen;
