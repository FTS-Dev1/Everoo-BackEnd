const mongoose = require('mongoose');
const validator = require("validator");





const locationSchema = new mongoose.Schema({
    image: Object,
    title: {
        type: String,
        unique: true
    },
    price: Number,
    description: String
}, { timestamps: true })


const locationModel = mongoose.model('LocationModel', locationSchema)

module.exports = locationModel;


