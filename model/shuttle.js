const mongoose = require('mongoose');
const validator = require("validator");





const shuttleSchema = new mongoose.Schema({
    image: Object,
    title: String,
    price: Number,
    description: String
}, { timestamps: true })


const shuttleModel = mongoose.model('ShuttleModel', shuttleSchema)

module.exports = shuttleModel;


