import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/User";
const SignIn = ({ history }) => {
    const [user, setUser] = useState({});

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };
    return (
        <form onSubmit={handleLogin} action="Submit" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <FaEnvelope
                    style={{
                        margin: "15px",
                        textAlign: "center",
                        lineHeight: "55px",
                        color: "#fff",
                        transition: "0.5s",
                        fontSize: "1.5rem",
                    }}
                />
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    autoComplete="current-Username"
                />
            </div>
            <div className="input-field">
                <FaLock
                    style={{
                        margin: "15px",
                        textAlign: "center",
                        lineHeight: "55px",
                        color: "#fff",
                        transition: "0.5s",
                        fontSize: "1.5rem",
                    }}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                />
            </div>
            <button
                onClick={handleLogin}
                type="submit"
                className="btn"
                defaultValue="Sign up"
            >
                Sign In
            </button>
        </form>
    );
};

export default SignIn;
