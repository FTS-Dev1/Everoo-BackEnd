const mongoose = require('mongoose');
const validator = require("validator");





const prasenteSchema = new mongoose.Schema({
    image: Object,
    title: {
        type: String,
        unique: true
    },
    price: Number,
    description: String
}, { timestamps: true })


const prasenteModel = mongoose.model('PrasenteModel', prasenteSchema)

module.exports = prasenteModel;


