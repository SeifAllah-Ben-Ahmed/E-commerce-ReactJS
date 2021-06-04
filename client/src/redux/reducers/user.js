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

// initial state
const initialState = {
    user: {},
    form: true,
    message: null,
    error: [],
    load: false,
    isAuth: false,
    isAdmin: false,
};
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load: true };
        case SET_FORM:
            return { ...state, form: !state.form };
        case REGISTER_USER:
            return {
                ...state,
                user: payload.user,
                message: payload.msg,
                load: false,
            };
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                user: payload.user,
                message: payload.msg,
                isAuth: true,
                load: false,
                isAdmin: payload.user.role === "Admin" ? true : false,
            };
        case CURRENT_USER:
            return {
                ...state,
                user: payload.user,
                isAuth: true,
                isAdmin: payload.user.role === "Admin" ? true : false,
            };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false };
        case FAIL_USER:
            return { ...state, error: payload.errors, load: false };
        case VIDE_ERRORS:
            return { ...state, errors: [] };
        default:
            return state;
    }
};
export default userReducer;
