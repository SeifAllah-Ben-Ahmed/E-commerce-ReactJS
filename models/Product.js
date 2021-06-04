const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: true,
    },
});
module.exports = mongoose.model("Product", productSchema);
