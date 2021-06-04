import {
    ADD_TO_CARD,
    ADD_TO_CARD_FAIL,
    DECREMENT_CARD,
    INCREMENT_CARD,
    REMOVE_CARD,
} from "../constants/ShoppingCard";

const initialState = {
    cardItems: [],
    error: [],
};
const cardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CARD:
            const exist = state.cardItems.some(
                (item) => item.product.name === payload.product.name
            );
            if (exist) {
                return {
                    ...state,
                    cardItems: state.cardItems.map((item) =>
                        item.product.name === payload.product.name
                            ? {
                                  ...item,
                                  quantity: item.quantity + 1,
                              }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cardItems: [
                        ...state.cardItems,
                        {
                            product: payload.product,
                            quantity: 1,
                        },
                    ],
                };
            }

        case INCREMENT_CARD:
            return {
                ...state,
                cardItems: state.cardItems.map((item) =>
                    item.product.name === payload
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item
                ),
            };
        case DECREMENT_CARD:
            return {
                ...state,
                cardItems: state.cardItems.map((item) =>
                    item.product.name === payload
                        ? {
                              ...item,
                              quantity: item.quantity - 1,
                          }
                        : item
                ),
            };
        case REMOVE_CARD:
            return {
                ...state,
                cardItems: state.cardItems.filter(
                    (item) => item.product.name !== payload
                ),
            };
        case ADD_TO_CARD_FAIL:
            return { ...state, error: payload.errors };
        default:
            return state;
    }
};
export default cardReducer;
