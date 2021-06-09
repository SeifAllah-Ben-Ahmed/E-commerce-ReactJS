import { FAIL_ORDER, ORDER } from "../constants/Order";
// initial state
const initialState = {
    Orders: [],
    error: [],
    message: "",
};

const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ORDER:
            return {
                ...state,
                Orders: payload.order,
                message: payload.msg,
            };
        case FAIL_ORDER:
            return {
                ...state,
                error: payload.errors,
            };
        default:
            return state;
    }
};
export default orderReducer;
