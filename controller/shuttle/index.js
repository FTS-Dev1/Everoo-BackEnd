const express = require("express");
const router = express();

const auth = require("../../middlewares/auth/auth");
const Controller = require("./shuttle");
const multer = require("../../utils/multer");



router.use(auth.authenticate);

router.get("/", Controller.getData);
router.post("/", multer.single("image"), Controller.CreateData);

module.exports = router;