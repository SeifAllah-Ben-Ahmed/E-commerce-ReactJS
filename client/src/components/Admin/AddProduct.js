import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AiFillCloseCircle, AiFillFileAdd } from "react-icons/ai";
import { addProduct } from "../../redux/actions/Product";

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: ${({ show }) => (show ? "0" : "-110%")};
    background: #f8f7f3;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 350ms;
    padding-top: 100px;
    z-index: 100;
`;
const Header = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    font-size: 35px;
    font-family: austin-web, serif;
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
    align-products: center;
    justify-content: space-between;
`;
const Card = styled.p`
    padding-left: 50px;
    color: #43283a;
    display: flex;
    font-size: 35px;
    font-family: austin-web, serif;
    margin: 2.2vw 0px;
    text-transform: uppercase;
`;
const Input = styled.input`
    width: 500px;
    background-color: #43283a;
    margin: 10px 0;
    height: 55px;
    border-radius: 55px;
    padding: 0 2rem;
    position: relative;
    outline: none;
    border: none;
    color: white;
`;
const Textarea = styled.textarea`
    height: 220px;
    width: 500px;
    background-color: #43283a;
    margin: 10px 0;
    border-radius: 25px;
    padding: 1rem;
    position: relative;
    outline: none;
    border: none;
    color: white;
`;

const AddProduct = () => {
    const [product, setproduct] = useState({});
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setproduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };
    const handleUpload = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.files[0] });
        // data.append("file", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(!show);
        dispatch(addProduct(product));
    };
    return (
        <>
            <AiFillFileAdd
                onClick={handleShow}
                style={{
                    cursor: "Pointer",
                    borderRadius: "50%",
                    backgroundColor: "#43283a",
                    color: "#fff",
                    padding: "10px",
                    fontSize: "50px",
                    zIndex: 10,
                }}
            />
            <Modal show={show}>
                <Header>
                    <Card>Add product : {product.name}</Card>
                    <AiFillCloseCircle
                        onClick={handleShow}
                        style={{
                            cursor: "Pointer",
                            borderRadius: "50%",
                            backgroundColor: "#43283a",
                            color: "#fff",
                            padding: "10px",
                            fontSize: "50px",
                            zIndex: 10,
                        }}
                    />
                </Header>
                <form
                    // onSubmit={handleSubmit}
                    // id="field-upload"
                    // me="submit"
                    action={"http://localhost:5000/api/product/add"}
                    method="PostT"
                    encType="multipart/form-data"
                >
                    <Input
                        onChange={handleChange}
                        required
                        name="name"
                        type="name"
                        placeholder="Product Name"
                    />
                    <Input
                        onChange={handleChange}
                        required
                        name="price"
                        type="number"
                        placeholder="Product Price"
                    />
                    <Textarea
                        onChange={handleChange}
                        required
                        name="discription"
                        type="text"
                        placeholder="Product Discription"
                    />

                    <div className="custom-file">
                        <input
                            onChange={handleUpload}
                            type="file"
                            // id="field-upload"
                            className="custom-file__input"
                            name="image"
                            required
                        />
                        <label
                            className="custom-file__label"
                            htmlFor="field-upload"
                        >
                            Choose Product Image
                        </label>
                    </div>
                    <button
                        className="btn"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </form>
            </Modal>
        </>
    );
};

export default AddProduct;
