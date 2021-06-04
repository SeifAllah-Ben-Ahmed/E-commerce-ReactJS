const express = require("express");
const { Register, Login } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const {
    validation,
    registerValidate,
    loginValidate,
} = require("../middleware/validateUser");
const router = express.Router();

/*
@methode :post
@path: http://localhost:5000/api/user/register
@parameter: req.body
Public
*/
router.post("/register", registerValidate(), validation, Register);

/*
@methode :post
@path: http://localhost:5000/api/user/Login
@parameter: req.body
Public
*/
router.post("/login", loginValidate(), validation, Login);
/*
@methode :get
@path: http://localhost:5000/api/user/current
@parameter: req.headers
Private
*/
router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
});
module.exports = router;
