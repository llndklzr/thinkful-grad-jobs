const router = require("express").Router();
const controller = require("./resumes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.readDownloadUrl).all(methodNotAllowed);

router.route("/upload").get(controller.readUploadUrl).all(methodNotAllowed);

module.exports = router;
