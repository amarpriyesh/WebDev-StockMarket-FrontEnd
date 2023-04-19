import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk,googleLoginThunk } from "../thunks/auth-thunks";
import { useSelector } from "react-redux";
import {GoogleLogin,GoogleLogout} from "react-google-login";
import {setSidebar} from "../reducers/sidebar-reducer";

function LoginScreen() {
    const {currentUser} = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setSidebar({component:"none",newsid:"ddd"}));

    var clientId = "959350101705-iulfiifgd5jt2n09cuuu9vj3a9lnqb0v.apps.googleusercontent.com"
    if (process.env.REACT_APP_ENVIRONMENT == "PRODUCTION") {
        clientId = "959350101705-2b65fq1nv6o2211ipkt87cb7a5askm82.apps.googleusercontent.com"
    }

    const responseGoogle = async (response) => {
        const user = {
            username: response.profileObj.givenName,
            password: response.profileObj.googleId,
            email: response.profileObj.email,
            profilePhoto: response.profileObj.imageUrl,
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName

        }
        console.log("google user", user)

        const returnedUserResponse = await dispatch(googleLoginThunk(user));
        if (returnedUserResponse.error) {
            setError("Incorrect credentials");
            navigate("/login")
        } else {
            navigate("/");
        }

        console.log('Logged In', currentUser);

    }

    const handleLogin =  async () => {
        const response = await dispatch(loginThunk({ email, password }));
        if (response.error) {
            setError("Incorrect credentials");
            navigate("/login")
        } else {
            navigate("/");
        }
    };
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-lg-4">
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
                                <GoogleLogin
                                    className="btn btn-light btn-block mt-3"
                                    clientId={clientId}
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={"single_host_origin"}
                                />
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
    );
}
export default LoginScreen;
