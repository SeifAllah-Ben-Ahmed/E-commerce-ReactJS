import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
