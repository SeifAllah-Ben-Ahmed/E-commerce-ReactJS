console.clear();
require("dotenv").config();
const connectDB = require("./config/connectDB");
const express = require("express");
const createCheckoutSession = require("./controllers/checkout");

const PORT = process.env.PORT;
connectDB(); //connect to mongoDB

const app = express();
app.use(express.json());

//routes
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));
app.use("/api/article", require("./routes/article"));

app.post("/api/create-checkout-session", createCheckoutSession);

app.listen(PORT, () =>
    console.log(`server is running on : http://localhost:${PORT}`)
);
