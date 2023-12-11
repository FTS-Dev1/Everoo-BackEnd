const mongoose = require('mongoose');
const validator = require("validator");





const hotelmanagementSchema = new mongoose.Schema({
    image: Object,
    title: String,
    price: Number,
    description: String
}, { timestamps: true })


const hotelmanagementModel = mongoose.model('HotelmanagementModel', hotelmanagementSchema)

module.exports = hotelmanagementModel;


