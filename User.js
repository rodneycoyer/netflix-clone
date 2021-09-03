const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
{timestamps: true}
);

// create Model and export
module.export = mongoose.model("User", UserSchema);