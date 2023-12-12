const mongoose = require('mongoose');
const validator = require("validator");





const eventSchema = new mongoose.Schema({
    name: String,
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CityModel"
    }]
}, { timestamps: true })


const eventModel = mongoose.model('EventModel', eventSchema)

module.exports = eventModel;