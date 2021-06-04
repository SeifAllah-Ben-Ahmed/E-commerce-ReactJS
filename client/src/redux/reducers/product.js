import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    FAIL_PRODUCT,
    GET_PRODUCT,
    GET_PRODUCTS,
    LOAD_PRODUCT,
    UPDATE_PRODUCT,
} from "../constants/Product";

// initial state
const initialState = {
    products: [],
    product: {},
    error: [],
    message: null,
    load: false,
};
const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PRODUCT:
            return { ...state, load: true };
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload.products,
                message: payload.msg,
                load: false,
            };
        case GET_PRODUCT:
            return {
                ...state,
                product: payload.product,
                message: payload.msg,
                load: false,
            };
        case DELETE_PRODUCT:
            return {
                message: payload,
                load: false,
            };
        case UPDATE_PRODUCT:
            return {
                message: payload,
                load: false,
            };
        case ADD_PRODUCT:
            return {
                message: payload,
                load: false,
            };
        case FAIL_PRODUCT:
            return { ...state, error: payload.errors, load: false };
        default:
            return state;
    }
};
export default productReducer;
