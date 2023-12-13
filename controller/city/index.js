const express = require("express");
const router = express();

const auth = require("../../middlewares/auth/auth");
const Controller = require("./city");
const multer = require("../../utils/multer");



router.use(auth.authenticate);

router.get("/", Controller.getData);
router.get("/allServices", Controller.getAllServicesData);
router.post("/", Controller.CreateData);
router.delete("/:id", Controller.deleteData);

module.exports = router;