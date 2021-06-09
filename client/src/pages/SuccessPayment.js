import React from "react";

const SuccessPayment = () => {
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
                    <span>200 </span>
                    <span>payment </span>
                    <span>success </span>
                </span>
            </h1>
        </div>
    );
};

export default SuccessPayment;
