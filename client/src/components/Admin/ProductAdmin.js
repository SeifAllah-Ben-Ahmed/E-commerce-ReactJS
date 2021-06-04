import React from "react";
import styled from "styled-components";
import "../ProductCard/ProductCard.css";
import EditeProduct from "./EditeProduct";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/Product";

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0px;
    position: relative;
    width: 262px;
    background-color: #43283a;
    border-radius: 4px;
    margin: 12px;
    text-decoration: none;
    overflow: hidden;
    border: 1px solid #43283a;
    &&:hover {
        transition: all 0.2s ease-out;
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
        top: -4px;
        border: 1px solid rgb(56, 31, 48);
        background-color: rgb(56, 31, 48);
    }
`;

const ProductAdmin = ({ item }) => {
    const img = `http://localhost:3000/shop/${item.image.filename}`;
    const path = `/shop/${item.name}`;
    const dispatch = useDispatch();
    const handleDelete = () => {
        const productName = item.name.toLowerCase();
        dispatch(deleteProduct(productName));
    };
    return (
        <Card>
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
            <div style={{ display: "flex" }}>
                <EditeProduct item={item} />

                <AiFillDelete
                    onClick={handleDelete}
                    style={{
                        cursor: "pointer",
                        margin: "15px",
                        textAlign: "center",
                        lineHeight: "55px",
                        color: "#fff",
                        transition: "0.5s",
                        fontSize: "1.5rem",
                    }}
                />
            </div>
        </Card>
    );
};

export default ProductAdmin;
