const mongoose = require('mongoose');
const validator = require("validator");





const veranstaltungstechnikSchema = new mongoose.Schema({
    image: Object,
    title: {
        type: String,
        unique: true
    },
    price: Number,
    description: String
}, { timestamps: true })


const veranstaltungstechnikModel = mongoose.model('VeranstaltungstechnikModel', veranstaltungstechnikSchema)

module.exports = veranstaltungstechnikModel;


