const mongoose = require('mongoose');
const validator = require("validator");





const staffSchema = new mongoose.Schema({
    image: Object,
    title: String,
    price: Number,
    description: String
}, { timestamps: true })


const staffModel = mongoose.model('StaffModel', staffSchema)

module.exports = staffModel;


