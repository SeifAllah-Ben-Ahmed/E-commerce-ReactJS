import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";
import { getAllProduct } from "../redux/actions/Product";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);

    const products = useSelector((state) => state.productReducer.products);

    return (
        <div
            style={{
                padding: "80px 0",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#43283a",
                minHeight: "100vh",
            }}
        >
            {products.map((item) => (
                <ProductCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default Shop;
