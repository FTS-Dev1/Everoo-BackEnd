const mongoose = require('mongoose');
const validator = require("validator");





const rangeSchema = new mongoose.Schema({
    min: Number,
    max: Number,
}, { timestamps: true })


const rangeModel = mongoose.model('RangeModel', rangeSchema)

module.exports = rangeModel;


