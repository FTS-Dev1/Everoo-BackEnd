const mongoose = require('mongoose');
const validator = require("validator");





const hotelmanagementSchema = new mongoose.Schema({
    image: Object,
    title: {
        type: String,
        unique: true
    },
    price: Number,
    description: String
}, { timestamps: true })


const hotelmanagementModel = mongoose.model('HotelmanagementModel', hotelmanagementSchema)

module.exports = hotelmanagementModel;


