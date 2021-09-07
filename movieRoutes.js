const express = require('express');
const verifyJWT = require('./verifyJWT');
const movieRouter = express.Router();
const Movie = require('../models/Movie');



// get movies
movieRouter.get("/", verifyJWT, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
    res.status(403).json("not authorized")
    }
});

// GET movie by id
movieRouter.get("/find/:id", verifyJWT, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err)
    }
});

// GET random featured tv or movie
movieRouter.get("/random", verifyJWT, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: {size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: {size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Create new Movie
movieRouter.put("/", verifyJWT, async (req, res) => {
    if (req.user.isAdmin){
        if (req.body.password) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie =  await newMovie.save();
            res.status(200).json(savedMovie);
        } catch (err) {
           res.status(500).json(err)
        }

        } else {
        res.status(403).json("not authorized")
        }
    }
});

// update movie
movieRouter.put("/:id", verifyJWT, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie =  await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
    res.status(403).json("not authorized")
    }
});

// delete movie
movieRouter.delete("/:id", verifyJWT, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("movie deleted from database");
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
    res.status(403).json("not authorized")
    }
});

module.exports = movieRouter;