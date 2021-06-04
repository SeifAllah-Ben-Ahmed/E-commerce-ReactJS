import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header
            style={{
                backgroundImage: "url('./assets/ia_100000002625.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <h1>
                <span className="spanContainer">
                    <span>this </span>
                    <span>is </span>
                    <span>not </span>
                    <span>ordinary </span>
                    <span>plum</span>
                </span>
            </h1>
        </header>
    );
};

export default Header;
