const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    imgTitle: {
        type: String,
    },
    imgCard: {
        type: String,
    },
    trailer: {
        type: String,
    },
    video: {
        type: String,
    },
    year: {
        type: String,
    },
    rating: {
        type: Number,
    },
    genre: {
        type: String,
    },
    isTelevision: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true}
);

module.exports = mongoose.model("Movie", MovieSchema);