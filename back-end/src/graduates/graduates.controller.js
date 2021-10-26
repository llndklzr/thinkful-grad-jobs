const crypto = require("crypto");
const passport = require("passport");
const isAuth = require("../authUtils/isAuth");
const service = require("./graduates.service");
const bizService = require("../businesses/businesses.service");
const storyService = require("../stories/stories.service");
require("../authUtils/passport");

async function registerUser(req, res, next){
  const saltHash = _genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = {
    graduate_email: req.body.username,
    graduate_hash: hash,
    graduate_salt: salt
  };

  await service.makeUser(newUser);
  next();
}

function _genPassword(password) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return {
    salt: salt,
    hash: genHash
  };
}

const authenticate = passport.authenticate("local", { failureRedirect: "/failure"});

function sendCredentials(req, res, next){
  res.json({data: req.session});
}

async function listGrads(req, res, next){
  const grads = await service.getAllGrads();
  res.json({data: grads});
}

async function getAllGradInfo(req, res){
  const gradId = req.params.graduate_id;
  const grad = await service.getUserById(gradId);
  const biz = await bizService.getBizByGradId(gradId);
  const story = await storyService.getStoryByGradId(gradId);
  const allGradInfo = {
    ...grad,
    ...biz,
    ...story
  }
  res.status(200).json({data: allGradInfo});
}

module.exports = {
  register: [registerUser, authenticate, sendCredentials],
  login: [authenticate, sendCredentials],
  list: [isAuth, listGrads],
  getAllGradInfo
}