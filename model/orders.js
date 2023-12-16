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
    budget: Number,
    days: Array,
    hours: String,
    phone: String,
    bill: Number,

    guests: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RangeModel"
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EventModel"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CityModel"
    },
    services: {
        Ausstattung: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AusstattungModel",
            default: null
        },
        Beverage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BeverageModel",
            default: null
        },
        Catering: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CateringModel",
            default: null
        },
        Dekoration: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DekorationModel",
            default: null
        },
        Eventmodule: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "EventmoduleModel",
            default: null
        },
        Hotelmanagement: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "HotelmanagementModel",
            default: null
        },
        Location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LocationModel",
            default: null
        },
        Prasente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PrasenteModel",
            default: null
        },
        Shuttle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ShuttleModel",
            default: null
        },
        Staff: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "StaffModel",
            default: null
        },
        Veranstaltungstechnik: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "VeranstaltungstechnikModel",
            default: null
        }
    }
},
    {
        timestamps: true,
    })


const orderModel = mongoose.model('OrderModel', ordersSchema)

module.exports = orderModel;


