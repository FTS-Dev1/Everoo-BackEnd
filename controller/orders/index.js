const express = require("express")
const router = express();
const orderController = require('./order')


router.post("/",orderController.createOrder)



router.get("/",orderController.getAllOrders)


module.exports = router;