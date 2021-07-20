const router = require("express").Router();
const controller = require("./resumes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.readUrl).all(methodNotAllowed);

module.exports = router;
