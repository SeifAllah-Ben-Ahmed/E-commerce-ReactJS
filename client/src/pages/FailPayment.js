import React from "react";

const FailPayment = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#381f30",
                height: "100vh",
                width: "100%",
                lineHeight: "0.8",
            }}
        >
            <h1>
                <span className="spanContainer">
                    <span>400 </span>
                    <span>payment </span>
                    <span>canceled </span>
                </span>
            </h1>
        </div>
    );
};

export default FailPayment;
