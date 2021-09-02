const router = require("express").Router();
const controller = require("./filters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/map").post(controller.mapFilter).all(methodNotAllowed);
router.route("/stories").post(controller.storyFilter).all(methodNotAllowed);


module.exports = router;