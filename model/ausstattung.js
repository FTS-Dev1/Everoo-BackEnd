const mongoose = require('mongoose');
const validator = require("validator");





const ausstattungSchema = new mongoose.Schema({
    image: Object,
    title: {
        type: String,
        unique: true
    },
    price: Number,
    description: String
}, { timestamps: true })


const ausstattungModel = mongoose.model('AusstattungModel', ausstattungSchema)

module.exports = ausstattungModel;


