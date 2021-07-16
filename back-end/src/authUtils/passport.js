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
      const user = await service.getUserByUsername(username);
      const isValid = user ? _validatePassword(password, user.hash, user.salt) : false;
      if(isValid){
        return done(null, user);
      } else{
        return done(null, false);
      }
    }
  ));

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((userId, done) => {
  const user = service.getUserByUserId(userId).catch(err => done(err));
  done(null, user)
});
