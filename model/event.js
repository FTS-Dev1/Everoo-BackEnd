const mongoose = require('mongoose');
const validator = require("validator");





const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CityModel"
    }]
}, { timestamps: true })


const eventModel = mongoose.model('EventModel', eventSchema)

module.exports = eventModel;