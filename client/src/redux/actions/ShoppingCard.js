import axios from "axios";
import {
    ADD_TO_CARD,
    ADD_TO_CARD_FAIL,
    DECREMENT_CARD,
    INCREMENT_CARD,
    REMOVE_CARD,
} from "../constants/ShoppingCard";

export const addToCard = (productName) => async (dispatch) => {
    try {
        const resulte = await axios.get(`/api/product/${productName}`);
        dispatch({
            type: ADD_TO_CARD,
            payload: resulte.data, //{msg,product}
        });
    } catch (error) {
        dispatch({ type: ADD_TO_CARD_FAIL, payload: error.response.data });
    }
};
export const incrementCard = (productName) => (dispatch) => {
    dispatch({
        type: INCREMENT_CARD,
        payload: productName,
    });
};
export const decrementCard = (productName) => (dispatch) => {
    dispatch({
        type: DECREMENT_CARD,
        payload: productName,
    });
};
export const removeCard = (productName) => (dispatch) => {
    dispatch({
        type: REMOVE_CARD,
        payload: productName,
    });
};
