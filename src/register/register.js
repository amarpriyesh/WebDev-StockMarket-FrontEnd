import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/user-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        const response = await dispatch(
            registerThunk({ username, password, firstName, lastName, age })
        );
        if (response.error) {
            setError(response.error);
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="container">
            <h1>Register Screen</h1>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div>
                <label htmlFor="firstName" >First Name</label>
                <br />
                <input
                    id="firstName"
                    className="form-control"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <br/>
                <input
                    id="lastName"
                    className="form-control"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <br/>
                <input
                    id="age"
                    className="form-control"
                    type="number"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <br />
                <input
                    id="username"
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
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
            <div>
                <label>Confirm Password</label>
                <input
                    className="form-control"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </div>
            <button onClick={handleRegister} className="btn btn-primary">
                Register
            </button>
        </div>
    );
}

export default RegisterScreen;
