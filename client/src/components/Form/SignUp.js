import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/User";

const SignUp = () => {
    const [user, setUser] = useState({});

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user));
    };

    return (
        <form
            onSubmit={handleRegister}
            action="submit"
            className="sign-up-form"
        >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <FaUserAlt
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
                    required
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Username"
                    autoComplete="current-Username"
                />
            </div>
            <div className="input-field">
                {/* <i className="fas fa-envelope" /> */}
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
                    required
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="current-email"
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
                    required
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                />
            </div>
            <button
                onClick={handleRegister}
                type="submit"
                className="btn"
                defaultValue="Sign up"
            >
                Sign up
            </button>
        </form>
    );
};

export default SignUp;
