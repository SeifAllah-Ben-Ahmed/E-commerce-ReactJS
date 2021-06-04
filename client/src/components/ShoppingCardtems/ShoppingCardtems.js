import React from "react";
import styled from "styled-components";
import {
    decrementCard,
    incrementCard,
    removeCard,
} from "../../redux/actions/ShoppingCard";
import { useDispatch } from "react-redux";
const ItemsCard = styled.div`
    color: #43283a;
    display: flex;
    line-height: 1.15;
    padding: 1.6666666666666667vw 0;
    position: relative;
    align-items: center;
    :after {
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        content: "";
        position: absolute;
        background-color: rgba(67, 40, 58, 0.3);
`;
const ItemsPrice = styled.p`
    color: #43283a;
`;
const ItemsName = styled.h3`
    color: #43283a;
    font-size: 20px;
    margin-bottom: 0.3vw;
    line-height: 1.1;
    text-transform: uppercase;
`;
const ItemsImage = styled.img`
    width: 25%;
    margin-right: 10px;
`;
const Wrapper = styled.div`
    flex: 1 1 auto;
    color: #43283a;
    position: relative;
    align-items: center;
    max-width: 269px;
`;
const Qty = styled.div`
    display: flex;
    padding: 10px 0;
`;
const Button = styled.button`
    width: 2.083333333333333vw;
    height: 2.083333333333333vw;
    display: inline-flex;
    opacity: 0.5;
    outline: none;
    background: none;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(67, 40, 58, 0.5);
    transition: 0.7s;
    &:hover {
        background-color: rgba(56, 31, 48, 0.9);
        color: #f8f7f3;
    }
`;
const Remove = styled.button`
    padding: 0 10px;
    height: 2.083333333333333vw;
    display: inline-flex;
    opacity: 0.5;
    outline: none;
    background: none;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(67, 40, 58, 0.5);
    transition: 0.7s;
    &:hover {
        background-color: rgba(56, 31, 48, 0.9);
        color: #f8f7f3;
    }
`;
const ItemsQty = styled.p`
    color: rgba(67, 40, 58, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 2.083333333333333vw;
    height: 2.083333333333333vw;
    border: 1px solid rgba(67, 40, 58, 0.5);
`;

const ShoppingCardtems = ({ item }) => {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementCard(item.product.name));
    };
    const decrement = () => {
        if (item.quantity > 1) {
            return dispatch(decrementCard(item.product.name));
        } else {
            return dispatch(removeCard(item.product.name));
        }
    };
    const remove = () => {
        dispatch(removeCard(item.product.name));
    };
    return (
        <ItemsCard>
            <ItemsImage
                src={
                    "http://localhost:3000/shop/" + item.product.image.filename
                }
                alt="product"
            />
            <Wrapper>
                <ItemsName>{item.product.name}</ItemsName>
                <ItemsPrice>{item.product.price} US$</ItemsPrice>
                <Qty>
                    <Button onClick={increment}>+</Button>
                    <ItemsQty>{item.quantity}</ItemsQty>
                    <Button onClick={decrement}>-</Button>
                    <Remove onClick={remove}>REMOVE</Remove>
                </Qty>
            </Wrapper>
            <ItemsName>{item.quantity * item.product.price}US$ </ItemsName>
        </ItemsCard>
    );
};

export default ShoppingCardtems;
