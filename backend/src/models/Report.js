const mongoose = require('mongoose');
const User = require('../models/User');

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Assuming you have a User model
    }
});

module.exports = mongoose.model('Report', reportSchema);
