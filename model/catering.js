const mongoose = require('mongoose');
const validator = require("validator");





const cateringSchema = new mongoose.Schema({
    image: Object,
    title: {
        type: String,
        unique: true
    },    price: Number,
    description: String
}, { timestamps: true })


const cateringModel = mongoose.model('CateringModel', cateringSchema)

module.exports = cateringModel;


