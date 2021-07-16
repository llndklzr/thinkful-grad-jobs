const passport = require("passport");
const LocalStrategy = require("passport-local");
const service = require("../graduates/graduates.service");
const crypto = require("crypto");

function _validatePassword(password, hash, salt){
  let hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hash === hashVerify;
}


passport.use(new LocalStrategy(
    async function(username, password, done) {
      const user = await service.getUserByEmail(username);
      const isValid = user ? _validatePassword(password, user.graduate_hash, user.graduate_salt) : false;
      if(isValid){
        console.log("WE MADE IT IN PASSPORT")
        return done(null, user);
      } else{
        return done(null, false);
      }
    }
  ));

passport.serializeUser((user, done) => {
  console.log("WE ARE SERIALIZING USER", user)
  done(null, user.graduate_id)
});

passport.deserializeUser((userId, done) => {
  const user = service.getUserById(userId).catch(err => done(err));
  done(null, user)
});
