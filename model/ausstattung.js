const mongoose = require('mongoose');
const validator = require("validator");





const ausstattungSchema = new mongoose.Schema({
    image: Object,
    title: String,
    price: Number,
    description: String
}, { timestamps: true })


const ausstattungModel = mongoose.model('AusstattungModel', ausstattungSchema)

module.exports = ausstattungModel;


