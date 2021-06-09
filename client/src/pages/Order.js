import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import OrderItem from "../components/order/OrderItem";
import { getOrders } from "../redux/actions/Order";
const Container = styled.div`
    padding: 8vw;
    width: 100%;
    min-height: 100vh;
    background-color: #381f30;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const Order = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    useEffect(() => {
        return dispatch(getOrders(user.email));
    }, [dispatch, user.email]);
    const orders = useSelector((state) => state.orderReducer.Orders);
    return (
        <Container>
            {orders.map((item) => (
                <OrderItem item={item} />
            ))}
        </Container>
    );
};

export default Order;
