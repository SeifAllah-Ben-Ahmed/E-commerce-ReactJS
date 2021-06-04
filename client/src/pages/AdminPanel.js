import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./admin.css";
const AdminPanel = () => {
    const [left, setleft] = useState(false);
    const [right, setright] = useState(false);
    const mouseEnterLeft = () => setleft(true);
    const mouseEnterRight = () => setright(true);
    const mouseLeaveLeft = () => setleft(false);
    const mouseLeaveRight = () => setright(false);

    return (
        <div
            className={
                left
                    ? "container-admin hover-left"
                    : "container-admin" && right
                    ? "container-admin hover-right"
                    : "container-admin"
            }
        >
            <div
                onMouseLeave={mouseLeaveLeft}
                onMouseEnter={mouseEnterLeft}
                className="split left"
            >
                <h1>Products</h1>
                <Link to="/admin/products" className=" button btn">
                    Manage Products
                </Link>
            </div>
            <div
                onMouseLeave={mouseLeaveRight}
                onMouseEnter={mouseEnterRight}
                className="split right"
            >
                <h1>Articles</h1>
                <Link to="/admin/articles" className="button btn">
                    Manage Articles
                </Link>
            </div>
        </div>
    );
};

export default AdminPanel;
