import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;
const Image = styled.img`
    height: 100%;
    width: 60%;
    position: absolute;
    top: 0;
    left: 0;
`;
const Details = styled.div`
    height: 100%;
    width: 40%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 10px;
    position: absolute;
    background-color: #43283a;
`;
const ProductName = styled.h2`
    font-size: 3.3333333333333335vw;
    width: 100%;
    padding: 5vw;
`;
const ProductDisctiption = styled.p`
    font-size: 1.5vw;
    padding: 10px 0;
    width: 100%;
`;
const Span = styled.span`
    font-size: 3vw;
`;
const SingleProductComponent = () => {
    const data = useSelector((state) => state.productReducer.product);
    // const img1 = useSelector((state) => state.productReducer.product);
    const [img, setimg] = useState("");
    useEffect(() => {
        if (data.image !== undefined) {
            setimg(`http://localhost:3000/shop/${data.image.filename}`);
        }
    }, [data]);

    return !data.image || !img ? (
        <h1>loading</h1>
    ) : (
        <Wrapper>
            <Image src={data ? img : null} />
            <Details>
                <ProductName>{data.name}</ProductName>
                <p>-FOR YOUR CREATIVITY</p>
                <ProductDisctiption>{data.discription}</ProductDisctiption>
                <Span> {data.price} US$</Span>
                <button className="btn">add to Card</button>
            </Details>
        </Wrapper>
    );
};

export default SingleProductComponent;
