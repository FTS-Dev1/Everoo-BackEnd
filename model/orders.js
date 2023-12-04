const mongoose = require('mongoose');
const validator = require("validator");

const ordersSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Invalid Email"],
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },

},
    {
        timestamps: true,
    })


const orderModel = mongoose.model('OrderModel', ordersSchema)

module.exports = orderModel;


