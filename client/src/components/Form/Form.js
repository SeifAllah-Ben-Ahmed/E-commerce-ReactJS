import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formToggle } from "../../redux/actions/User";

import "./Form.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Form = ({ history }) => {
    // const [form, setForm] = useState(false);
    const form = useSelector((state) => state.userReducer.form);

    const dispatch = useDispatch();
    const toggleForm = () => {
        dispatch(formToggle());
    };
    return (
        <>
            <div className={form ? "container sign-up-mode" : "container"}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <SignIn history={history} />
                        <SignUp />
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Debitis, ex ratione. Aliquid!
                            </p>
                            <button
                                onClick={toggleForm}
                                className="btn transparent"
                                id="sign-up-btn"
                            >
                                Sign up
                            </button>
                        </div>
                        {/* <img src="img/log.svg" className="image" alt="" /> */}
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nostrum laboriosam ad
                                deleniti.
                            </p>
                            <button
                                onClick={toggleForm}
                                className="btn transparent"
                                id="sign-in-btn"
                            >
                                Sign in
                            </button>
                        </div>
                        {/* <img src="img/register.svg" className="image" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
