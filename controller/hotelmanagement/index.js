const express = require("express");
const router = express();

const auth = require("../../middlewares/auth/auth");
const Controller = require("./hotelmanagement");
const multer = require("../../utils/multer");



router.use(auth.authenticate);

router.get("/", Controller.getData);
router.post("/", multer.single("image"), Controller.CreateData);
router.patch("/:id", multer.single("image"), Controller.UpdateData);
router.delete("/:id", Controller.deleteData);

module.exports = router;