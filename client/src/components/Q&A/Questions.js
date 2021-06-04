import React from "react";
import Flickity from "react-flickity-component";
import QuestionsCard from "../QuestionsCard/QuestionsCard";
import styled from "styled-components";

const WrapperQuestions = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #43283a;
    width: 100%;
`;

const Questions = () => {
    return (
        <WrapperQuestions>
            <h2>ALL YOU NEED TO KNOW</h2>
            <Flickity>
                <QuestionsCard />
                <QuestionsCard />
                <QuestionsCard />
                <QuestionsCard />
                <QuestionsCard />
                <QuestionsCard />
                <QuestionsCard />
                <QuestionsCard />
                <QuestionsCard />
            </Flickity>
        </WrapperQuestions>
    );
};

export default Questions;
