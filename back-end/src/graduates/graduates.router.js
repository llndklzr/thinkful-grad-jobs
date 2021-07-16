const router = require("express").Router();
const controller = require("./graduates.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/register").post(controller.register).all(methodNotAllowed);

module.exports = router;