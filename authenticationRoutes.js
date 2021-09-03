const express = require('express');
const authenticationRouter = express.Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


// register new user
authenticationRouter.post("/register", async (req, res) => {
    const addUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try {
        const newUser = await addUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json(err)
    }
});

// login
authenticationRouter.post("/login", async (req, res) => {
    try {
        // look for registered email
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("wrong password or username");
        // decrypt password
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        // check password
        originalPassword !== req.body.password && res.status(401).json("invalid username or password");

        // json web token
        const securityToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn: "3h"}
        );

        // userInfo except password
        const {password, ...userInfo} = user._doc;

        res.status(200).json({...userInfo, securityToken});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = authenticationRouter;


