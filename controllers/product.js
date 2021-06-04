const Product = require("../models/Product");

exports.GetProduct = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res
                .status(404)
                .send({ errors: [{ msg: "Product not found" }] });
        }
        res.status(200).send({ msg: "Products found", products });
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "Products not found" }] });
    }
};
exports.GetSingleProduct = async (req, res) => {
    const productURL = req.params.name;

    const productName = productURL.split("-").join(" ").toUpperCase();
    try {
        const product = await Product.findOne({ name: productName });
        if (!product) {
            return res
                .status(404)
                .send({ errors: [{ msg: "Product not found" }] });
        }
        res.status(200).send({ msg: "Product found", product });
    } catch (error) {
        res.status(404).send({ errors: [{ msg: "Product not found" }] });
    }
};

exports.AddProduct = async (req, res) => {
    // get product details from req.files && req.body
    const { name, price, discription } = req.body;

    try {
        //check if product exist
        const findProduct = await Product.findOne({ name: name.toUpperCase() });
        if (findProduct) {
            res.status(400).send({
                errors: [
                    { msg: "Product already exsit, name should be unique" },
                ],
            });
        }
        // create new product
        const newProduct = await new Product({
            name: name.toUpperCase(),
            price,
            discription,
            image: req.file,
        });
        //save product
        await newProduct.save();
        res.status(201).send({ msg: "Product is saved", Product: newProduct });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "Product not saved" }] });
    }
};

exports.UpdateProduct = async (req, res) => {
    const productURL = req.params.name.split("-").join(" ").toUpperCase();
    try {
        //find product
        const findProduct = await Product.findOne({
            name: productURL,
        });
        if (!findProduct) {
            return res.status(404).send({
                errors: [{ msg: "Product not found" }],
            });
        }
        // check if the new name exist
        const existProduct = await Product.findOne({
            name: req.body.name.toUpperCase(),
        });

        if (existProduct) {
            if (req.body.name !== productURL) {
                return res.status(404).send({
                    errors: [{ msg: "Product name already exist" }],
                });
            }
        }
        const productName = {
            name: req.body.name
                ? req.body.name.toUpperCase()
                : findProduct.name,
        };
        const img = { image: req.file ? req.file : findProduct.image };
        const updateProduct = await Product.updateOne(
            { name: productURL },
            {
                $set: {
                    ...req.body,
                    image: img.image,
                    name: productName.name,
                },
            }
        );
        res.status(200).send({
            msg: "Products Updated successfully",
            updateProduct,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "Can Not Update Product" }] });
    }
};

exports.DeleteProduct = async (req, res) => {
    try {
        const findProduct = await Product.findOne({
            name: req.params.name.toUpperCase(),
        });
        if (!findProduct) {
            return res.status(404).send({
                errors: [{ msg: "Product not found" }],
            });
        }
        const deleteProduct = await Product.deleteOne({ _id: findProduct._id });
        res.status(200).send({
            msg: "Products Deleted Successfuly",
            deleteProduct,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "Can Not Delete Product" }] });
    }
};
