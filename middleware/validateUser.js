const { validationResult, check } = require("express-validator");

//check register body
exports.registerValidate = () => [
    check("name", "name is required").notEmpty(),
    check("email", "email is required").notEmpty(),
    check("email", "email is provide a valide email").isEmail(),
    check("password", "password is required").notEmpty(),
    check("password", "password should be more then 5 character").isLength({
        min: 6,
    }),
];
exports.loginValidate = () => [
    check("email", "email is required").notEmpty(),
    check("email", "email is provide a valide email").isEmail(),
    check("password", "password is required").notEmpty(),
];

//check register validate  error
exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
