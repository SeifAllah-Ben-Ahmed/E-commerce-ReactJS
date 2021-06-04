const test = (req, res, next) => {
    console.log(req);
    next();
};
module.exports = test;
