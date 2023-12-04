const express = require("express")
const router = express();
const orderController = require('./order')


router.post("/",orderController.getAllOrders)
router.post("/",orderController.createOrder)


module.exports = router;