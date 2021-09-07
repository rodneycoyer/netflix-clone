const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const verifyJWT = require('./verifyJWT');




// get monthly user record stats
userRouter.get("/stats", verifyJWT, async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() -1);
    const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    try {
        const data = await User.aggregate([
            {
                month: {$month: '$createdAt'}
            }, {
                $group: {
                    _id: "$month",
                    total: {$sum:1}
                }
            }
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});




// get all users
userRouter.get("/", verifyJWT, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query
                ? await User.find().sort({_id: -1}).limit(10)
                : await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("not authorized")
    }
});

// get user
userRouter.get("/find/:id", async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...userInfo } = user._doc;
            res.status(200).json(userInfo);
        } catch (err) {
            res.status(404).json(err);
        }
    }
);

// update user.id
userRouter.put("/:id", verifyJWT, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin){
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("not authorized to update this account")
    }
});

// delete user.id
userRouter.delete("/:id", verifyJWT, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("not authorized to delete this account");
    }
});

module.exports = userRouter;