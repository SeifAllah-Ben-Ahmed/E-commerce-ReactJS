const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    sessionID: {
        type: String,
        require: true,
        unique: true,
    },
    lineItems: {
        type: [Object],
        require: true,
    },
    customerEmail: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Order", orderSchema);
