const mongoose = require('mongoose');
const validator = require("validator");





const staffSchema = new mongoose.Schema({
    image: Object,
    title: {
        type: String,
        unique: true
    },
    price: Number,
    description: String
}, { timestamps: true })


const staffModel = mongoose.model('StaffModel', staffSchema)

module.exports = staffModel;


