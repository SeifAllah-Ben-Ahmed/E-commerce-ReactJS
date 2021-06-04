import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/actions/ShoppingCard";

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const handelAddToCard = () => {
        dispatch(addToCard(item.name));
    };
    const img = `http://localhost:3000/shop/${item.image.filename}`;
    const path = `/shop/${item.name.split(" ").join("-").toLowerCase()}`;
    return (
        <div className="ProductCard">
            <Link
                style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    top: "0px",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                    width: "100%",
                }}
                to={path}
            >
                <img src={img} width="100%" alt="imgcard" />
                <h3>{item.name}</h3>
                <p>{item.price}.00 US$</p>
            </Link>
            <button onClick={handelAddToCard} className="btn">
                add to Card
            </button>
        </div>
    );
};

export default ProductCard;
