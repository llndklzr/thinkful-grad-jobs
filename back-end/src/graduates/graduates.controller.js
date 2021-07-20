const crypto = require("crypto");
const passport = require("passport");
const isAuth = require("../authUtils/isAuth");
const service = require("./graduates.service");
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
  res.json({data: grads})
}

module.exports = {
  register: [registerUser, authenticate, sendCredentials],
  login: [authenticate, sendCredentials],
  list: [isAuth, listGrads]
}