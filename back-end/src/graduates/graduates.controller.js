const crypto = require("crypto");

// call this when registers user
// make sure db can take salt and hash
function registerUser(req, res, next){
  const saltHash = _genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = {
    username: req.body.username,
    hash: hash,
    salt: salt
  };
  const result = service.makeUser(newUser);
  res.json({result})
}

function _genPassword(password) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return {
    salt: salt,
    hash: genHash
  };
}

module.exports = {
  register: [registerUser]
}