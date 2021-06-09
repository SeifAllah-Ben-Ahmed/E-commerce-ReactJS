const express = require("express");
const createCheckoutSession = require("../controllers/checkout");
const { getOrders } = require("../controllers/order");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.post("/create-checkout-session", isAuth, createCheckoutSession);
router.get("/create-checkout-session/:email", getOrders);

module.exports = router;
