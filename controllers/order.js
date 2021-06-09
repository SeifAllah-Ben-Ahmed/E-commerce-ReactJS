const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
    const customerEmail = req.params.email;
    try {
        const order = await Order.find({ customerEmail });
        if (!order) {
            res.status(404).send({ errors: [{ error: "order not found" }] });
        }
        res.status(200).send({ msg: "order found", order });
    } catch (error) {
        res.status(404).send({ errors: [{ error: "order not found" }] });
    }
};
