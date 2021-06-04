import React from "react";
import "./QuestionsCard.css";

const QuestionsCard = () => {
    return (
        <>
            <div className="card1">
                <span>QUESTION N°01</span>
                <h3>What is the Queen Garnet?</h3>
                <p className="small">
                    Developed in Queensland and grown in all states around
                    Australia, The Queen Garnet has been hailed as a “superfood”
                    due to its antioxidant content.
                </p>
                <div className="go-corner" href="#">
                    <div className="go-arrow"></div>
                </div>
            </div>
        </>
    );
};

export default QuestionsCard;
