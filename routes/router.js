const express = require("express");
const router = express();

// Controllers :
const controllers = require("../controller");

// Routes Constant :
const routes = require("../constants/routes");





router.use(routes.AUTH, controllers.auth);
router.use(routes.USER, controllers.user);
router.use(routes.SUBSCRIPTION, controllers.order)

router.use(routes.AUSSTATTUNG, controllers.ausstattung)
router.use(routes.BEVERAGES, controllers.beverage)
router.use(routes.CATERING, controllers.catering)
router.use(routes.DEKORATION, controllers.dekoration)
router.use(routes.EVENTMODULE, controllers.eventmodule)
router.use(routes.HOTELMANAGEMENT, controllers.hotelmanagement)
router.use(routes.LOCATION, controllers.location)
router.use(routes.PRASENTE, controllers.prasente)
router.use(routes.SHUTTLE, controllers.shuttle)
router.use(routes.STAFF, controllers.staff)
router.use(routes.VERANST, controllers.veranstaltungstechnik)


module.exports = router;