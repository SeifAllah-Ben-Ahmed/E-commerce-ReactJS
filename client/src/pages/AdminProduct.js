import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "../components/Admin/AddProduct";
import ProductAdmin from "../components/Admin/ProductAdmin";
import { getAllProduct } from "../redux/actions/Product";

const AdminProduct = () => {
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
            <AddProduct />
            {products &&
                products.map((item) => (
                    <ProductAdmin key={item._id} item={item} />
                ))}
        </div>
    );
};

export default AdminProduct;
