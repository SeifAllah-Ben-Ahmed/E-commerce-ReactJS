import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
//import action
const CheckOut = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    color: #f8f7f3;
    background-color: #43283a;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 25px;
    width: 100%;
    outline: none;
    padding: 10px;
    font-family: "Austin-cry Roman";
`;
const StripeCheckout = () => {
    const cardItems = useSelector((state) => state.cardReducer.cardItems);
    const user = useSelector((state) => state.userReducer.user);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const stripe = useStripe();

    const handleCheckout = async () => {
        if (isAuth) {
            const line_items = cardItems.map((item) => {
                return {
                    quantity: item.quantity,
                    price_data: {
                        currency: "usd",
                        unit_amount: item.product.price * item.quantity * 100,
                        product_data: {
                            name: item.product.name,
                            description: item.product.description,
                            images: [
                                `http://localhost:3000/shop/${item.product.image.filename}`,
                            ],
                        },
                    },
                };
            });
            const config = {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            };
            const resulte = await axios.post(
                "/api/create-checkout-session",
                {
                    line_items,
                    customer_email: user.email,
                },
                config
            );

            const { error } = await stripe.redirectToCheckout({
                sessionId: resulte.data.sessionID,
            });
            if (error) {
                console.log(error);
            }
        }
    };
    return isAuth ? (
        <CheckOut onClick={handleCheckout}>checkout</CheckOut>
    ) : (
        <Link to="/join-us">
            <CheckOut>checkout</CheckOut>
        </Link>
    );
};

export default StripeCheckout;
