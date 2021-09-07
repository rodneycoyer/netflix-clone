const express = require('express');
const verifyJWT = require('./verifyJWT');
const List = require('../models/List');

const listRouter = express.Router();

// get lists
listRouter.get('/', async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { sample: { size: 10 }},
                    { $match: {type: typeQuery, genre: genreQuery}},
                ]);
            } else {
                list = await List.aggregate([
                    { sample: { size: 10 }},
                    { $match: {type: typeQuery }},
                ]);
            }
            res.status(200).json(list)
        } else {
            list = await List.aggregate([ {$sample: {size: 10 } } ])
        }
    } catch (err) {
        res.status(500).json('not authorized');
    }
});

// Create new list
listRouter.put("/", verifyJWT, async (req, res) => {
    if (req.user.isAdmin){
        if (req.body.password) {
            const newList = new List(req.body);

        try {
            const savedList =  await newList.save();
            res.status(200).json(savedList);
        } catch (err) {
            res.status(500).json(err)
        }

        } else {
            res.status(403).json("not authorized")
        }
    }
});

// delete list
listRouter.delete("/:id", verifyJWT, async (req, res) => {
    if (req.user.isAdmin){
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("list deleted");
        } catch (err) {
            res.status(500).json(err)
        }

        } else {
            res.status(403).json("not authorized")
        }
    }
);


module.exports = listRouter;