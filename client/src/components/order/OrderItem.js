import React from "react";
import styled from "styled-components";
import LineItems from "./LineItems";

const Container = styled.div`
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #381f30;
    width: 800px;
    line-height: 0.8;
    border: 1px solid white;
    padding: 20px;
    font-size: 15px;
`;
const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const OrderItem = ({ item }) => {
    return (
        <Container>
            <p>Order Id : {item.sessionID}</p>
            <List>
                {item.lineItems.map((lineItem, index) => (
                    <LineItems key={index} lineItem={lineItem} />
                ))}
            </List>
        </Container>
    );
};

export default OrderItem;
