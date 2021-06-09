import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ProductData = styled.h4`
    color: #fff;
    font-size: 15px;
    line-height: 1.5;
    font-weight: 500;
    padding: 10px;
`;
const LineItems = ({ lineItem }) => {
    const { price_data, quantity } = lineItem;
    return (
        <Card>
            <img
                height="200px%"
                src={price_data.product_data.images[0]}
                alt={price_data.product_data.name}
            />
            <div>
                <ProductData> {price_data.product_data.name} </ProductData>
                <ProductData>
                    {price_data.unit_amount / 100}
                    {price_data.currency}
                </ProductData>
                <ProductData>{quantity}</ProductData>
            </div>
        </Card>
    );
};

export default LineItems;
