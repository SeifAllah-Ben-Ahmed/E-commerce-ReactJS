const { validationResult, check, body } = require("express-validator");

//check product body
exports.productValidate = () => [
    body("name").notEmpty(),
    check("price", "Product price is required").notEmpty(),
    check("discription", "Product disctiption is required").notEmpty(),
    // check("image", "Product Image is required").notEmpty(),
    // check("gallery", "Product gallery images is required").notEmpty(),
];

//check register validate  error
exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
