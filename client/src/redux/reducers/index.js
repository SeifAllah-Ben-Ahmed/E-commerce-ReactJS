import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import articleReducer from "./article";
import orderReducer from "./order";
import cardReducer from "./ShoppingCard";

const rootReducer = combineReducers({
    cardReducer,
    userReducer,
    productReducer,
    articleReducer,
    orderReducer,
});

export default rootReducer;
