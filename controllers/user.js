const User = require("../models/User");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.Register = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        //verify if email is unique
        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).send({
                errors: [{ msg: "user already exsit, email should be unique" }],
            });
        }
        //create new user
        const newUser = await new User({ email, name, password });

        // hashage password
        const hashedpassword = await bcrypt.hash(password, saltRounds);
        newUser.password = hashedpassword;
        await newUser.save();
        res.status(201).send({ msg: "user is saved", user: newUser });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "user not saved" }] });
    }
};
exports.Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credential" }] });
        }
        const matchPassword = await bcrypt.compare(password, findUser.password);
        if (!matchPassword) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credential" }] });
        }
        const token = jwt.sign(
            { _id: findUser._id },
            process.env.TOKEN_SECRET_KEY
        );
        res.status(200).send({
            msg: "login successfully",
            user: findUser,
            token,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "can not login" }] });
    }
};
