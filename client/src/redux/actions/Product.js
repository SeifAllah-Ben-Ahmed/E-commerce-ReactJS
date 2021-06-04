import axios from "axios";
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    FAIL_PRODUCT,
    GET_PRODUCT,
    GET_PRODUCTS,
    LOAD_PRODUCT,
    UPDATE_PRODUCT,
} from "../constants/Product";

export const getAllProduct = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const resulte = await axios.get("/api/product/");

        dispatch({ type: GET_PRODUCTS, payload: resulte.data }); //{products,msg}
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
    }
};

export const getSingleProduct = (productName) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const resulte = await axios.get(`/api/product/${productName}`);
        dispatch({ type: GET_PRODUCT, payload: resulte.data }); //{product,msg}
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
    }
};
export const deleteProduct = (productName) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const resulte = await axios.delete(
            `/api/product/delete/${productName}`,
            config
        );
        dispatch(getAllProduct());
        dispatch({ type: DELETE_PRODUCT, payload: resulte.data.msg }); //{DeleteProduct,msg}
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
    }
};
export const editeProduct =
    (updatedProduct, productName) => async (dispatch) => {
        const formData = new FormData();
        formData.append("name", updatedProduct.name);
        formData.append("price", updatedProduct.price);
        formData.append("image", updatedProduct.image);
        formData.append("discription", updatedProduct.discription);
        // console.log(formData.get("file"));
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        try {
            const resulte = await axios.put(
                `/api/product/update/${productName.split(" ").join("-")}`,
                formData,
                config
            );

            dispatch(getAllProduct());
            dispatch({ type: UPDATE_PRODUCT, payload: resulte.data }); //{UpdateProduct,msg}
        } catch (error) {
            dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
            console.log(error.response.data);
        }
    };

export const addProduct = (addProduct) => async (dispatch) => {
    const formData = new FormData();
    formData.append("name", addProduct.name);
    formData.append("price", addProduct.price);
    formData.append("image", addProduct.image);
    formData.append("discription", addProduct.discription);
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const resulte = await axios.post("/api/product/add/", formData, config);

        dispatch({ type: ADD_PRODUCT, payload: resulte.data.msg }); //{UpdateProduct,msg}
        dispatch(getAllProduct());
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
    }
};
