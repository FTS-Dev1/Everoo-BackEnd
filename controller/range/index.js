const express = require("express");
const router = express();

const auth = require("../../middlewares/auth/auth");
const rangeController = require("./range");





router.get("/", rangeController.getRange);

router.use(auth.authenticate);

router.post("/", rangeController.createRange);
router.patch("/:id", rangeController.setRange);
router.delete("/:id", rangeController.deleteRange);

module.exports = router;