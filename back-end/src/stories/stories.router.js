/**
 * Defines the router for stories resources.
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./stories.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
