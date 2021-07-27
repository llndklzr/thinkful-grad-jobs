const router = require("express").Router();
const controller = require("./graduates.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const isAuth = require("../authUtils/isAuth");

router.route("/register").post(controller.register).all(methodNotAllowed);
router.route("/login").post(controller.login).all(methodNotAllowed);
router.route("/:graduate_id").get(controller.getAllGradInfo).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;