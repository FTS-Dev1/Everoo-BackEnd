const mongoose = require('mongoose');
const validator = require("validator");





const beverageSchema = new mongoose.Schema({
    image: Object,
    title: String,
    price: Number,
    description: String
}, { timestamps: true })


const beverageModel = mongoose.model('BeverageModel', beverageSchema)

module.exports = beverageModel;


