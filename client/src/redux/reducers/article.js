import {
    FAIL_ARTICLE,
    GET_ARTICLE,
    GET_ARTICLES,
    LOAD_ARTICLE,
} from "../constants/Article";

// initial state
const initialState = {
    Articles: [],
    Article: {},
    error: [],
    message: null,
    load: false,
};
const articleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_ARTICLE:
            return { ...state, load: true };
        case GET_ARTICLES:
            return {
                ...state,
                load: false,
                Articles: payload.articles,
                message: payload.msg,
            };
        case GET_ARTICLE:
            return {
                ...state,
                load: false,
                Article: payload.Article,
                message: payload.msg,
            };
        case FAIL_ARTICLE:
            return { ...state, error: payload, load: false };

        default:
            return state;
    }
};
export default articleReducer;
