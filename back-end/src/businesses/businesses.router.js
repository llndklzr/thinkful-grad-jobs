const router = require("express").Router();
const controller = require("./businesses.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:businessId/graduates").get(controller.listByBusinessId).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;