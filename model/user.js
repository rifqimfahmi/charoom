var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthDate: String,
    hobby: String,
    passion: String
});

var User = mongoose.model("user", UserSchema);
module.exports = User;
