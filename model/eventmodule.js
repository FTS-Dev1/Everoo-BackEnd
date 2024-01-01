const mongoose = require('mongoose');
const validator = require("validator");





const eventmoduleSchema = new mongoose.Schema({
    image: Object,
    title: {
        type: String,
        unique: true
    },
    price: Number,
    description: String
}, { timestamps: true })


const eventmoduleModel = mongoose.model('EventmoduleModel', eventmoduleSchema)

module.exports = eventmoduleModel;


