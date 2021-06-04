import React from "react";
import styled from "styled-components";
import HomeProduct from "../components/Product/HomeProduct";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";

import Questions from "../components/Q&A/Questions";

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #43283a;
    width: 100%;
`;
const MainTitle = styled.h3`
    line-height: 1;
    font-size: 4.5vw;
    width: 50%;
    padding-top: 8vw;
    margin-bottom: 2vw;
    color: #fff;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
`;
const Title = styled.h2`
    line-height: 1;
    font-size: 6vw;
    width: 50%;
    padding-top: 8vw;
    margin-bottom: 2vw;
    color: #fff;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
`;
const MainContent = styled.p`
    width: 54%;
    font-size: 2vw;
    margin: 0 auto;
    text-align: center;
    line-height: 1;
    display: block;
    color: #fff;
`;
const SpanContainer = styled.p`
    width: 25%;
    font-size: 2vw;
    margin-bottom: 13vw;
    tsext-align: center;
    display: inline-block;
    text-align: center;
    margin-top: 1em;
    color: #fff;
    line-height: 1;
`;
const StyledImage = styled.img`
    width: 150px;
    margin: 25px 0;
`;
const ImageSection = styled.div`
    background-image: "url('./assets/ia_100000003304.jpg)";
    background-repeat: "no-repeat";
    background-size: "cover";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #381f30;
    height: 100vh;
    width: 100%;
    line-height: 0.8;
`;

const LandingPage = () => {
    return (
        <>
            <Header />
            <MainWrapper>
                <MainTitle>meat the queen of antioxidants.</MainTitle>
                <MainContent>
                    100% Australian. 100% natural. The Queen Garnet plum has
                    been lovingly cultivated to be ‘the queen of antioxidants’.
                    The perfect sweet union of taste and wellbeing, it’s
                    cherished by nutritionists and worshipped by foodies.
                </MainContent>
                <StyledImage
                    width="150px"
                    src="./assets/ia_100000002737.png"
                    alt="logo image"
                />

                <SpanContainer>
                    FIND YOUR NEAREST STOCKIST, OR ORDER ONLINE.
                </SpanContainer>
                <HomeProduct />
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#fff",
                    }}
                >
                    {/* <MainTitle>ROYAL RECIPES</MainTitle> */}
                    <Slider />
                </div>
                <Questions />
                <ImageSection
                    style={{
                        backgroundImage: "url('./assets/ia_100000003304.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <Title>we're all over the shops</Title>
                    <button className="btn"> Visite Shop</button>
                </ImageSection>
            </MainWrapper>
        </>
    );
};
export default LandingPage;
