import axios from "axios";
import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    SET_FORM,
    VIDE_ERRORS,
} from "../constants/User";

export const formToggle = () => async (dispatch) => {
    dispatch({ type: SET_FORM });
};

export const register = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const resulte = await axios.post("/api/user/register", user);
        dispatch({ type: REGISTER_USER, payload: resulte.data }); //{user,msg}
        dispatch({ type: SET_FORM });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};
export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const resulte = await axios.post("/api/user/login", user);
        dispatch({ type: LOGIN_USER, payload: resulte.data }); //{user,msg,token}
        history.push("/");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        let result = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

// logout
export const logout = () => {
    console.log("logOut");
    return {
        type: LOGOUT_USER,
    };
};

export const videErrors = () => {
    return {
        type: VIDE_ERRORS,
    };
};
