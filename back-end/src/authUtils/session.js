const session = require("express-session");
const {connection} = require("../../knexfile");

module.exports = session({
  secret: "anything",
  store: connection,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000*60*60*24 // sets cookie valid of 1 day
  },
});