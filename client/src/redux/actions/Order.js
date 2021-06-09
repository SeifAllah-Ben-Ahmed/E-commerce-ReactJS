import axios from "axios";
import { FAIL_ORDER, ORDER } from "../constants/Order";

export const getOrders = (customerEmail) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const resulte = await axios.get(
            `/api/create-checkout-session/${customerEmail}`,
            config
        );
        console.log(resulte.data);
        dispatch({ type: ORDER, payload: resulte.data });
    } catch (error) {
        dispatch({ type: FAIL_ORDER, payload: error.response.data });
    }
};
