import React from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./Slider.css";
const MainTitle = styled.h3`
    line-height: 1;
    font-size: 4.5vw;
    width: 50%;
    padding-top: 8vw;
    margin-bottom: 2vw;
    color: #43283a;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
`;

const Slider = () => {
    return (
        <>
            <MainTitle>ROYAL RECIPES</MainTitle>
            <div
                style={{
                    padding: "6.944444444444445vw ",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#fff",
                }}
            >
                <Flickity>
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </Flickity>
            </div>
        </>
    );
};

export default Slider;
