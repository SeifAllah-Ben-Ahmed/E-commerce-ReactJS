import React, { useState } from "react";
import styled from "styled-components";
import { AiFillShopping, AiFillCloseCircle } from "react-icons/ai";
import ShoppingCardtems from "../ShoppingCardtems/ShoppingCardtems";
import { useSelector } from "react-redux";
import StripeCheckout from "../StripeCheckout/StripeCheckout";

const Shop = styled.span`
    position: fixed;
    right: 31px;
    top: 30px;
    color: #43283a;
    z-index: 11;
    font-weight: bold;
    pointer-events: none;
    z-index: 9;
`;
const TotalPrice = styled.span`
    color: #43283a;
    display: flex;
    font-size: 20px;
    align-items: center;
    font-family: austin-web, serif;
    margin: 2.2vw 0px;
    text-transform: uppercase;
`;
const SidebarNav = styled.div`
    width: 100%;
    background: #f8f7f3;
    z-index: 10;
    overflow: auto;
    padding: 20px 30px;
`;
const Card = styled.p`
    color: #43283a;
    display: flex;
    font-size: 35px;
    align-items: center;
    font-family: austin-web, serif;
    margin: 2.2vw 0px;
    text-transform: uppercase;
    justify-content: space-between;
`;
const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? "0" : "-110%")};
    background: #f8f7f3;
    width: 500px;
    height: 100vh;
    display: flex;
    justify-content: center;
    transition: 350ms;
    z-index: 100;
`;

const ShoppingCard = () => {
    //toggle Card
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const cardItems = useSelector((state) => state.cardReducer.cardItems);

    const subTotals = cardItems.map(
        (item) => item.quantity * item.product.price
    );
    const total =
        subTotals.length !== 0
            ? subTotals.reduce(
                  (accumulator, currentValue) => accumulator + currentValue
              )
            : 0;
    return (
        <Sidebar sidebar={sidebar}>
            <AiFillShopping
                onClick={showSidebar}
                style={{
                    cursor: "Pointer",
                    borderRadius: "50%",
                    backgroundColor: "#43283a",
                    fontSize: "50px",
                    color: "#fff",
                    padding: "10px",
                    position: "fixed",
                    right: "10px",
                    top: "10px",
                    zIndex: 9,
                }}
            />
            {cardItems.length === 0 ? null : <Shop>{cardItems.length}</Shop>}
            <SidebarNav>
                <AiFillCloseCircle
                    onClick={showSidebar}
                    style={{
                        cursor: "Pointer",
                        borderRadius: "50%",
                        backgroundColor: "#43283a",
                        color: "#fff",
                        padding: "10px",
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        fontSize: "50px",
                        zIndex: 10,
                    }}
                />
                <Card>
                    YOUR CART <TotalPrice>total: {total}$</TotalPrice>
                </Card>

                {cardItems.map((item) => (
                    <ShoppingCardtems key={item.product._id} item={item} />
                ))}
                <StripeCheckout />
            </SidebarNav>
        </Sidebar>
    );
};

export default ShoppingCard;
