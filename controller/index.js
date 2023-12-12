const auth = require("./auth/index");
const order = require("./orders/index")
const user = require("./user/index")

const ausstattung = require("./ausstattung")
const beverage = require("./beverage")
const catering = require("./catering")
const dekoration = require("./dekoration")
const eventmodule = require("./eventmodule")
const hotelmanagement = require("./hotelmanagement")
const location = require("./location")
const prasente = require("./prasente")
const shuttle = require("./shuttle")
const staff = require("./staff")
const veranstaltungstechnik = require("./veranstaltungstechnik")

const city = require("./city")
const event = require("./event")
const range = require("./range")



const controllers = {
    auth,
    user,
    order,
    
    ausstattung,
    beverage,
    catering,
    dekoration,
    eventmodule,
    hotelmanagement,
    location,
    prasente,
    shuttle,
    staff,
    veranstaltungstechnik,

    city,
    event,
    range
}

module.exports = controllers;