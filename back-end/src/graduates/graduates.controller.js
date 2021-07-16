const crypto = require("crypto");
const passport = require("passport");
const isAuth = require("../authUtils/isAuth");
const service = require("./graduates.service");
require("../authUtils/passport");

// call this when registering user
// make sure db can take salt and hash
async function registerUser(req, res, next){
  const saltHash = _genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = {
    graduate_email: req.body.username,
    graduate_hash: hash,
    graduate_salt: salt
  };
  const result = await service.makeUser(newUser);
  res.sendStatus(201);
}

function _genPassword(password) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return {
    salt: salt,
    hash: genHash
  };
}

const authenticate = passport.authenticate("local", {successRedirect: "/success", failureRedirect: "/failure"});

async function listGrads(req, res, next){
  const grads = await service.getAllGrads();
  res.json({data: grads})
}


module.exports = {
  register: [registerUser],
  login: [authenticate],
  list: [isAuth, listGrads]
}