const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isMember: {type: Boolean, default: false},

    favourites: [{type: String}],
    cart: [{
        carId: String,
        name: String,
        price: String,
        type: String,
        img: String
    }]
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema)