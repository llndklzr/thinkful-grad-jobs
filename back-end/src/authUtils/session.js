const session = require("express-session");
const knexSessionStore = require('connect-session-knex')(session);


module.exports = session({
  secret: "anything",
  store: new knexSessionStore({
    knex: require('../db/connection'),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60 * 24
  }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000*60, // 1000*60*60*24, // sets cookie valid of 1 day
    domain: "localhost",
    sameSite: false,
    httpOnly: false
  },
  unset:"destroy",
});