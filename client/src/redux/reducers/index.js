import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import articleReducer from "./article";
import cardReducer from "./ShoppingCard";

const rootReducer = combineReducers({
    cardReducer,
    userReducer,
    productReducer,
    articleReducer,
});

export default rootReducer;
