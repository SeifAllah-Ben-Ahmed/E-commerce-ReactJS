const express = require("express");
const {
    AddProduct,
    UpdateProduct,
    GetProduct,
    GetSingleProduct,
    DeleteProduct,
    Payment,
} = require("../controllers/product");
const { upload } = require("../middleware/uploadProduct");
const isAdmin = require("../middleware/isAdmin");
const {
    validation,
    productValidate,
} = require("../middleware/validateProduct");
const test = require("../middleware/test");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

/*
@methode :get
@path: http://localhost:5000/api/products/
Public
*/
router.get("/", GetProduct);
router.get("/:name", GetSingleProduct);

/*
@methode :post
@path: http://localhost:5000/api/products/add
@parameter: req.body
Private
*/
router.post(
    "/add",
    test,
    isAdmin,
    upload.single("image"),
    productValidate(),
    validation,
    AddProduct
);

/*
@methode :patch
@path: http://localhost:5000/api/products/add/:name
@parameter: req.body
Private
*/
router.put(
    "/update/:name",
    isAdmin,
    test,
    upload.single("image"),
    productValidate(),
    validation,

    UpdateProduct
);

/*
@methode :delete
@path: http://localhost:5000/api/products/delete/:name
Private
*/
router.delete(
    "/delete/:name",
    isAdmin,
    // upload.single("image"),
    DeleteProduct
);
module.exports = router;
