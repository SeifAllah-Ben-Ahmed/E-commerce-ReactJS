import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import SingleProductComponent from "../components/SingleProduct/SingleProductComponent";
import { getSingleProduct } from "../redux/actions/Product";

const SingleProduct = (props) => {
    const dispatch = useDispatch();
    const productName = props.match.params.name;

    useEffect(() => {
        dispatch(getSingleProduct(productName));
    }, [dispatch, productName]);

    return <SingleProductComponent />;
};

export default SingleProduct;
