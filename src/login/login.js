import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../thunks/user-thunks";
import { useSelector } from "react-redux";
function LoginScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            <h1>
                <button onClick={handleLogin} className="float-end btn btn-primary">
                    Login
                </button>
                Login Screen
            </h1>
            {error && (
                <div className="alert alert-danger" role="alert">
                    <pre>{error}</pre>
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
