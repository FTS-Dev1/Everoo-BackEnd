const express = require("express");
const router = express();

const auth = require("../../middlewares/auth/auth");
const Controller = require("./event");
const multer = require("../../utils/multer");




router.get("/public", Controller.getData);

router.use(auth.authenticate);

router.get("/", Controller.getData);
router.post("/", Controller.CreateData);
router.delete("/:id", Controller.deleteData);

module.exports = router;