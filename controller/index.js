const auth = require("./auth/index");
const order = require("./orders/index")
const user = require("./user/index")




const controllers = {
    auth,
    user,
    order,
}

module.exports = controllers;