const mongoose = require('mongoose');
const validator = require("validator");





const dekorationSchema = new mongoose.Schema({
    image: Object,
    title: String,
    price: Number,
    description: String
}, { timestamps: true })


const dekorationModel = mongoose.model('DekorationModel', dekorationSchema)

module.exports = dekorationModel;


